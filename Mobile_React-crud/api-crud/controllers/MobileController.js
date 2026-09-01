const Mobile = require("../models/Mobile");

const addMobile = async (req, res) => {
  try {
    console.log(req.body);
    let mobile = new Mobile(req.body);
    await mobile.save();
    console.log("Data Save Successfully.....");
    res.status(200).send({ message: "data has been saved Successfully" });
  } catch (err) {
    res.status(400).send({ message: "something went wrong.. " });
  }
};

const getMobiles = async(req, res) => {
  try{
     let mobiles = await Mobile.find({});
     res.status(200).send({ data: mobiles });
  } catch(err) {
      res.status(400).send({ message:err })
  }
}

const deleteMobile = async(req, res) => {
  try{
    let id = req.params.id;
    await Mobile.deleteOne({_id: id});
    res.status(200).send({success: true})
  } catch(err) {
    res.status(400).send({success : false})
  }
}

const editMobile = async(req, res) => {
  try{
    let id = req.params.id;
    let mobile = await Mobile.findOne({_id: id})
    res.state(200).send({data: mobile})
  } catch(err) {
    res.status(400).send({success: false})
  }
}
module.exports = {
  addMobile,
  getMobiles,
  deleteMobile,
  editMobile,
};
