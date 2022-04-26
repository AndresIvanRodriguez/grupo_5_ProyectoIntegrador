//Sí el usuario logueado es administrador permite ingresar al index de usuarios y productos

function adminMiddleware (req, res, next){
    res.locals.isLogged = false;

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;

        if(res.locals.userLogged.roleId == 2 || res.locals.userLogged.roleId == null){
            return res.redirect("/")
        }
        
    }
    next();
}

module.exports = adminMiddleware;