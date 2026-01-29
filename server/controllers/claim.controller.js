const Claim = require("../models/claim.model");
const Deal = require("../models/deal.model");


exports.createClaim = async (req, res) => {
  try {
    const userId = req.user.id;
    const { dealId } = req.body;

    if (!dealId) {
      return res.status(400).json({ message: "Deal ID is required" });
    }

    const deal = await Deal.findById(dealId);
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }


    if (deal.isLocked && !req.user.isVerified) {
      return res
        .status(403)
        .json({ message: "Verify your startup to claim this deal" });
    }

    
    const claim = await Claim.create({
      user: userId,
      deal: dealId,
    });

    res.status(201).json({
      message: "Deal claimed successfully",
      claim,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "You have already claimed this deal" });
    }

    res.status(500).json({ message: "Server error" });
  }
};


exports.getMyClaims = async (req, res) => {
  try {
    const claims = await Claim.find({ user: req.user.id })
      .populate("deal", "title category")
      .sort({ createdAt: -1 });

    res.json(claims);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
