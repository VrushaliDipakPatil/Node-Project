const db = require('../utils/db-connection');
const Users = require('../models/users');
const Bookings = require('../models/bookings');
const Buses = require('../models/buses');

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

const updateUser = async(req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await Users.findByPk(id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    await user.update({ name, email });
    res.status(200).send({ message: `User ${name} updated successfully` });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).send({ message: 'Error updating user' });
  }
};

const deleteUser = async(req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByPk(id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    await user.destroy();
    res.status(200).send({ message: `User ${user.name} deleted successfully` });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send({ message: 'Error deleting user' });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const { id } = req.params;

    const bookings = await Bookings.findAll({
      where: {
        UserId: id
      },
      include: [
        {
          model: Buses
        }
      ]
    });

    res.status(200).send(bookings);

  } catch (error) {
    console.error('Error fetching user bookings:', error);
    res.status(500).send({
      message: 'Error fetching user bookings'
    });
  }
};

module.exports = { addUser, fetchUsers, updateUser, deleteUser, getUserBookings };