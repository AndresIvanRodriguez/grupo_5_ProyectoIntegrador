const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.JSON');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
       //Mostrar página de registro
    registerUser: (req,res) => {
        res.render(("register"));
    },

    store: (req, res) => {
		let newUsers = {
			id: users[users.length - 1].id + 1,
			...req.body,
		};

		users.push(newUsers);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));

        console.log(users);

		res.redirect('../');
	}
}

module.exports = controller;