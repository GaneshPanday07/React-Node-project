const Mobile = require('../models/Mobile')

const addMobile = async(req, res) => {
    try{
        console.log(req.body)
        let mobile = new Mobile(req.body)
        await mobile.save()
        console.log("Data Save Successfully.....")
        res.status(200).send({message: 'data has been saved Successfully'})
    } catch(err){
        res.status(400).send({message: 'something went wrong.. '})
    }
}
module.exports = {
    addMobile,
}