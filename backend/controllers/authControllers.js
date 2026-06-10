const adminModel = require('../models/adminModel');
const sellerModel = require('../models/sellerModel')
const sellerCustomerModel = require('../models/chat/sellerCustomerModel')
const { responseReturn } = require('../utiles/response');
const bcrpty = require('bcrypt')
const { createToken } = require('../utiles/tokenCreate');

class authControllers {
    admin_login = async (req, res) => {
        const {email, password} = req.body
        try {
            const admin = await adminModel.findOne({email}).select('+password')
            console.log('test');
            
            if (admin) {
                const match = await bcrpty.compare(password, admin.password)
                
                if (match) {
                    const token = await createToken({
                        id : admin.id,
                        role: admin.role
                    })
                    res.cookie('accessToken', token, {
                        expires : new Date(Date.now() + 7*24*60*60*1000)
                    })
                    
                    responseReturn(res, 200, {token, message: 'Login successful'})
                    
                } else {
                    responseReturn(res, 500, {error: 'Password is wrong'})
                }
                
            } else {
                responseReturn(res, 404, {error: 'Email not found'})
            }
            
        } catch (error) {
            responseReturn(res, 500, {error: error.message})
        }     
    }

    seller_register = async (req, res) => {

        const {email, name, password} = req.body
        try {
            const getUser = await sellerModel.findOne({email})
            if (getUser) {
                responseReturn(res,404,{error: 'Email Already Exit'})
            }else{
                const seller = await sellerModel.create({
                    name,
                    email,
                    password: await bcrpty.hash(password, 10),
                    method : 'manually',
                    shopInfo: {}
                })
                await sellerCustomerModel.create({
                    myId: seller.id
                })

                const token = await createToken({
                    myId: seller.id, role: seller.role
                })
                res.cookie('accessToken', token, {expires : new Date(Date.now() + 7*24*60*60*1000)})

                responseReturn(res,201,{token, message: 'Registered Successfully'})
            }
         } catch (error) {
            responseReturn(res, 500, {error: 'Internal server error'})
         }
    }

    getUser = async (req, res) => {
        const {id, role} = req;

        try {
            if (role === 'admin') {
                const user = await adminModel.findById(id)
                responseReturn(res, 200, {userInfo : user})
            } else {
                console.log('Seller info');
                
            }
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
}

module.exports = new authControllers()