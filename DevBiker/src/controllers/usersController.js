const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/usuariosDataBase.JSON');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	
    store: (req, res) => {
		let image = req.file ? req.file.filename : "default-image.png";
		let newUsers = {
			id: users[users.length - 1].id + 1,
			...req.body,
			image: image
		};

		users.push(newUsers);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));

		res.redirect('/');
	}
}
    
module.exports=controller;