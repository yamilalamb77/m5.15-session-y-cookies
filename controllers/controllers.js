const {validationResult} = require('express-validator')
module.exports = {
    index: (req, res) => {

        var fondo = req.session.colorFondo

        if(req.cookies.fondo_){
            let fondo = res.cookie.fondo_ 
            res.render('index', {
                title: 'session y coockies', 
                fondo
              })
        }else{
            var fondo = req.session.colorFondo
            
            res.render('index', {
                title: 'session y coockies', 
                fondo
              })
        }
    },
    post_form: (req,res)=>{
        console.log(req.body)
        let datos_form = {
            nombre,
            fondo,
            mail,
            edad,
            tel,
            check_color
        } = req.body
        
        if(check_color != undefined){
            res.cookie('fondo_', fondo ,{maxAge: 6000})
            // aca se crea la cookie para el fondo 
        }

        req.session.nombre_usuario = nombre
        req.session.colorFondo = fondo
        
        let resultValidation = validationResult(req)
        if(resultValidation.errors.length > 0){
     
            res.render('index', 
            {
                errors: resultValidation.mapped(), 
                old: req.body , 
                title: 'session y coockies' ,
                fondo : "no_color"
            })
        }if(resultValidation.errors.length < 1){ 
    
            var fondo = req.session.colorFondo
                res.render('datos', {
                    datos_form , fondo
            })
        }else{
            res.send("algo salio mal con las valdiaciones")
        }
    },
    saludo:(req,res)=>{
        var nombre = req.session.nombre_usuario
        var fondo = req.session.colorFondo
        res.render('saludo', {nombre , fondo} )
    },
   
}