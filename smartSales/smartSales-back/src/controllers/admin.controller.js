'use strict'
const Admin = require('../models/admin.model')
const {validateData, encrypt, checkPassword, checkDataUpdate, checkPermission, searchAdmin, searchCompany1} = require('../utils/validate');
const {createToken} = require('../services/jwt');

exports.registerAdmin = async(req, res)=>{
    try {
        const params = req.body;
        const data = {
            name: params.name,
            surname: params.surname,
            username: params.username,
            password: params.password,
            email: params.email,
            role: 'ADMIN'
        }

        let msg = validateData(data);
        if(!msg){
            const userExist = await searchAdmin(params.username);
            if(!userExist){
                data.password= await encrypt(params.password);

                let admin = new Admin(data);
                await admin.save();
                admin.password = undefined;
                return res.status(200).send({message:'User Admin saved', admin});

            }else{
                return res.status(400).send({message:'This username already exist'})
            }

        }else{
            return res.status(400).send(msg)
        }

    } catch (error) {
        console.log(error);
        return error;
        
    }
};
//LOGIN
exports.login = async (req, res) => {
    try {
        const params = req.body;
        const data = {
            username: params.username,
            password: params.password
        }
        let msg = validateData(data);
        if (!msg) {
            let userExist = await searchAdmin(params.username);
            if (userExist && await checkPassword(params.password, userExist.password)) {
                const token = await createToken(userExist);
                return res.status(200).send({token, message: 'Login successfully', userExist});
            } else {
                let companyExist = await searchCompany1(params.username);
            if (companyExist && await checkPassword(params.password, companyExist.password)) {
                const token = await createToken(companyExist);
                return res.status(200).send({token, message: 'Login Company successfully', companyExist});
            }
                return res.status(400).send({message: 'Username or password incorrect'});
            } 

            
        } else {
            return res.status(400).send(msg);
        
        }
        
    } catch (err) {
        console.log(err);
        return err;
    }
}

