const db = require('../utils/db-connection');
const Users = require('../models/users');

const addUser = async(req, res) => {
  try{
const { name, email } = req.body;
const user = await Users.create({
  name: name,
  email: email
});
res.status(200).send({ message: `User ${name} added successfully` });
  }catch (error) {
    console.error('Error adding user:', error);
    res.status(500).send({ message: 'Error adding user' });
  }

};

const fetchUsers = async(req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).send(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send({ message: 'Error fetching users' });
  }
};

module.exports = { addUser, fetchUsers };