import Item from "../models/item_model.js";

// Create new item
export const createItem = (req, res) =>
  Item.create(req.body)
    .then((item) => res.status(201).json(item))
    .catch((err) => res.status(400).json({ message: err.message }));

// Get items with filters, search, and sorting
export const getItems = (req, res) => {
  const { category, min, max, search, sortBy } = req.query;

  const filter = {};
  if (category) filter.category = category;

  if (min || max) {
    filter.price = {};
    if (min) filter.price.$gte = Number(min);
    if (max) filter.price.$lte = Number(max);
  }

  if (search) {
    // case-insensitive regex match on name
    filter.name = { $regex: search, $options: "i" };
  }

  // Sorting logic
  let sort = {};
  if (sortBy === "name") sort = { name: 1 };            // A → Z
  else if (sortBy === "price-low") sort = { price: 1 }; // Low → High
  else if (sortBy === "price-high") sort = { price: -1 }; // High → Low
  else if (sortBy === "category") sort = { category: 1 };

  Item.find(filter)
    .sort(sort)
    .then((items) => res.json(items))
    .catch((err) => res.status(500).json({ message: err.message }));
};

// Update item
export const updateItem = (req, res) =>
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json({ message: err.message }));

// Delete item
export const deleteItem = (req, res) =>
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(400).json({ message: err.message }));
