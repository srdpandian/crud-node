module.exports = (app)=>{
    const{check,validationResult} = require('express-validator')
    require('../controller/controller')

    app.post('/user/login', [
        check('username').exists().isLength({ min: 1 }).withMessage('Username is Reqiured'),
        check('password').exists().isLength({ min: 1 }).withMessage('Password is Required')
      ], (request, response) => {
        console.log(request.body)
        const errors = validationResult(request)
        if (!errors.isEmpty()) {
          var errorArray = errors.array()
          var errorResponse = {}
          errorResponse.error = true
          errorResponse.message = errorArray[0].msg
          return response.send(errorResponse)
        }
        this.userLogin(request.body, function (results) {
            return response.send(results)
        })
    })

    app.post('user/userRegister',[
        check('name').notEmpty().withMessage('please enter the name').isString().withMessage("only string is allowed").trim(),
        check('mobileno').notEmpty().withMessage('please enter the mobile no').isNumeric().withMessage('only numbers allowed'),
        check('username').notEmpty().withMessage('please enter the username').isAlphanumeric().withMessage('only alphanumrics are allowed'),
        check('password').notEmpty().withMessage('please enter the password').isAlphanumeric().withMessage('only alphanumrics are allowed')
    ],(request,response)=>{
        const errors = validationResult(request) 
        if(!errors.isEmpty()){
            let errorArray = errors.array()
            let errorResponse = {}
            errorResponse.error = true
            errorResponse.message = errorArray[0].msg
            return response.send(errorResponse)
        }
        this.userRegister(request.body, function(results){
            return response.send(results)
        })
    })
}