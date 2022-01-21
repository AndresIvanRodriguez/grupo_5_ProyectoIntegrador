module.exports = {
    home: (req,res)=>{
        res.render(("users/home"));
    },
    loginUser: (req,res)=> {
        res.render(("users/login"));
    },
    registerUser: (req,res) => {
        res.render(("users/register"));
    },
    carrito:(req,res)=>{
        res.render(("users/carrito"));
    },
    producto:(req,res)=>{
        res.render(("users/producto"));
    },
    productInfo: (req,res) => {
        res.render(("products/product_info"));
    }

}