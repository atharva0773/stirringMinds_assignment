const Deal = require("../models/deal.model.js");

// @desc   Get all deals
// @route  GET /api/deals
// @access Public
exports.getAllDeals = async (req, res) => {
  try {
    const deals = await Deal.find().sort({ createdAt: -1 });
    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc   Get single deal
// @route  GET /api/deals/:id
// @access Public
exports.getDealById = async (req, res) => {
  try {
    const deal = await Deal.findById(req.params.id);

    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    res.json(deal);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
