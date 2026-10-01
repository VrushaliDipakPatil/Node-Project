const db= require('../utils/db-connection');

const addBuses = (req,res)=>{
    const {busNumber, totalSeats, availableSeats} = req.body;
    const insertQuery = 'INSERT INTO Buses (busNumber, totalSeats, availableSeats) VALUES (?, ?, ?)';
    db.execute(insertQuery, [busNumber, totalSeats, availableSeats], (err)=>{
        if(err){
            console.error('Error inserting data:', err);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log('Data inserted successfully');
        res.status(200).send({message: `Bus ${busNumber} added successfully`});
    });
}

const getBusesasperAvailableSeats = (req,res)=>{
    const {availableSeats} = req.params;
    const selectQuery = 'SELECT * FROM Buses WHERE availableSeats >= ?';   
    db.execute(selectQuery, [availableSeats], (err, results)=>{
        if(err){
            console.error('Error fetching data:', err);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        res.status(200).send(results);
    });
}

module.exports = {addBuses, getBusesasperAvailableSeats};