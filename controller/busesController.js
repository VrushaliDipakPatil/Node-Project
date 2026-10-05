const db= require('../utils/db-connection');
const Buses = require('../models/buses');
const { Op } = require('sequelize');

const addBuses = async(req,res)=>{
    try{
const {busNumber, totalSeats, availableSeats} = req.body;
const bus = await Buses.create({
  busNumber: busNumber,
  totalSeats: totalSeats,
  availableSeats: availableSeats
});
res.status(200).send({ message: `Bus ${busNumber} added successfully` });
    }catch (error) {
        console.error('Error adding bus:', error);
        res.status(500).send({ message: 'Error adding bus' });
    }

}

const getBusesasperAvailableSeats = async(req,res)=>{
    try {
        const {availableSeats} = req.params;
        const buses = await Buses.findAll({
            where: {
                availableSeats: {
                    [Op.gte]: availableSeats
                }
            }
        });
        res.status(200).send(buses);
    } catch (error) {
        console.error('Error fetching buses:', error);
        res.status(500).send({ message: 'Error fetching buses' });
    }
};


module.exports = {addBuses, getBusesasperAvailableSeats};