const router = require("express").Router();
const {
  createClaim,
  getMyClaims,
} = require("../controllers/claim.controller.js");
const protect = require("../middelware/auth.middelware.js");

router.post("/", protect, createClaim);
router.get("/me", protect, getMyClaims);

module.exports = router;
