const Mobiles = require("../models/Mobile");

const addMobile = async (req, res) => {
  try {
    console.log("Received Data:", req.body);

    let mobile = new Mobiles(req.body);

    await mobile.save();

    console.log("Mobile Saved:", mobile);

    res.status(201).json({
      message: "Mobile added successfully",
      data: mobile,
    });
  } catch (err) {
    console.log("Actual Error:", err);

    res.status(500).json({
      message: "Error adding mobile",
      error: err.message,
    });
  }
};

module.exports = {
  addMobile,
};
