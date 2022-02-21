function guestMiddleware (req, res, next){
    if(req.sessionuserLogged){
        return res.redirect("/users/perfil")
    }
    next();
}

module.exports = guestMiddleware;