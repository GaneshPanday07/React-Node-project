const User = require('./models/User')
const bcrypt = require('bcrypt')

const createAdmin = async() => {
    try{
        let user = await User.findOne({email: 'ganeshp782791@gmail.com' })
        if(user){
            console.Console.log('user updated successfully...')
        }else{
            user = new User();
            user.firstName= 'Ganesh';
            user.lastName= 'panday';
            user.mobileNo = "7827910083"
            user.email = 'ganeshp782791@gmail.com'
            let password = bcrypt.hashSync('123456', 10);
            user.password = password;
            user.userType= 'admin';
            await user.save();
            console.log("user created successfully.....")
        }
    } catch(err){
        console.log(err)
    }
}
module.exports = createAdmin