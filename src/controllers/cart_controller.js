import Cart from "../models/cart_model.js";

const getOrCreateCart = async (userId) =>
  (await Cart.findOne({ userId })) || (await Cart.create({ userId, items: [] }));

export const getMyCart = async (req, res) => {
  const cart = await getOrCreateCart(req.userId);
  res.json(cart);
};

export const addToCart = async (req, res) => {
  const { itemId, qty = 1 } = req.body;
  const cart = await getOrCreateCart(req.userId);
  const idx = cart.items.findIndex((i) => i.itemId.equals(itemId));
  if (idx > -1) cart.items[idx].qty += qty;
  else cart.items.push({ itemId, qty });
  await cart.save();
  res.json(cart);
};

export const removeFromCart = async (req, res) => {
  const { itemId } = req.body;
  const cart = await getOrCreateCart(req.userId);
  cart.items = cart.items.filter((i) => !i.itemId.equals(itemId));
  await cart.save();
  res.json(cart);
};
