module.exports.responseReturn = (res, code, data) => {
    console.log(data);
    
    return res.status(code).json(data)
}