import jwt from "jsonwebtoken";

export const adminOnly = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token required" });
  }

  const token = authHeader.split(" ")[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if user has admin role
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }
    
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
