module.exports = {
    home: (req,res)=>{
        res.render(("users/home"));
    },
    productInfo: (req,res) => {
        res.render(("products/product_info"));
    },
    loginUser: (req,res)=> {
        res.render(("users/login"));
    },
    registerUser: (req,res) => {
        res.render(("users/register"));
    },
    create: (req,res)=>{
        res.render(("products/createProducts"));
    },
    carrito:(req,res)=>{
        res.render(("users/carrito"));
    },
    producto:(req,res)=>{
        res.render(("users/producto"));
    }
}