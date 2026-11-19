const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Root health check route
app.get('/', (req, res) => {
    res.json({
        status: 'success',
        message: 'Vachis Resources Backend is running!'
    });
});
// GET: Fetch all properties
app.get('/api/properties', async (req, res) =>
{
    try {
        const [rows] = await db.query('SELECT * FROM properties');
        console.log('PROPERTIES ROUTE HIT:', rows);
        res.json({
            status: 'success',
            data: rows
        });
    } catch (error) {
        console.error('Error fetching properties:', error.message);
        res.status(500).json({
            status: "error",
            message: "Unable to retrieve properties" });
    }
});
app.get('/api/properties/search', async (req, res) => {
    try {
        const { budget, bedrooms } = req.query;
        let query = 'SELECT * FROM properties WHERE 1=1';
        let values = [];

        if (budget !== undefined) {
            if (! Number.isFinite(Number(budget)) || Number(budget) < 0) {
                return res.status(400).json({
                    status: 'error',
                    message: 'Enter a valid budget.'
                });
            }
            query += ' AND price <= ?'; values.push(Number(budget));
        }
        if (bedrooms !== undefined) {
            if (! Number.isInteger(Number(bedrooms)) || Number(bedrooms) < 1) {
                return res.status(400).json({
                    status: 'error',
                    message: 'Enter a valid number of bedrooms.'
                });
            }
            query =+ ' AND bedrooms = ?';
            values.push(Number(bedrooms));
        }
        const [rows] = await db.query(query, values);
        res.json({
            status: 'success',
            results: rows.length,
            data: rows 
        });
    } catch (error) {
        console.error('Property search error:', error.message);
        res.status(500).json({
            status: 'error',
            message: 'Unable to search properties.'
        });
    }
});
app.get('/api/properties/:id', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM properties WHERE property_id = ?',
            [req.params.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Property not found'
            });
        }
        res.json({
            status: 'success',
            data: rows[0]
        });
    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            status: 'error',
            message: 'Unable to retrieve property'
        });
    }
});
app.post('/api/properties', async (req, res) =>
{
    const { title, location, price, listing_type } = req.body;

    if (
        typeof title !== 'string' || !title.trim() ||
        typeof location !== 'string' || !location.trim() ||
        price === undefined || !Number.isFinite(Number(price)) ||
        Number(price) < 0 || typeof listing_type !== 'string' || !listing_type.trim()
    ) {
        return res.status(400).json({ 
            status: 'error', 
            message: 'Valid title, location, price and listing type are required.' })
    }

    try {
        const query = `INSERT INTO properties (title, location, price, listing_type) VALUES (?, ?, ?, ?)`;
        const [result] = await db.query(query, [
            title.trim(),
            location.trim(),
            Number(price),
            listing_type.trim()
        ]);
        
        res.status(201).json({
            status: 'success',
            message: 'Property added successfully',
            propertyId: result.insertId
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ 
            status: 'error', 
            message: 'Unable to add property' });
    }
});

//Start server

app.listen(PORT, () => {
    console.log(`Vachis server running at http://localhost:${PORT}`);
});
app.post('/api/bookings', async (req, res) => {
    const {
        client_name,
        contact,
        email,
        service_type,
        project_details
    } = req.body;

    if (!client_name || !contact || !service_type) {
        return res.status(400).json({
            status: 'error',
            message: 'Name, contact and service type are required.'
        });
    }

    try {
        const query = `
            INSERT INTO service_bookings

            (client_name, contact, email, service_type, project_details)
            VALUES (?, ?, ?, ?, ?)
        `;

        const [result] = await db.query(query, [
            client_name,
            contact,
            email || '',
            service_type,
            project_details || ''
        ]);

        res.status(201).json({
            status: 'success',
            message: 'Enquiry submitted successfully!',
            bookingId: result.insertId
        });

    } catch (error) {
        console.error('Booking error:', 

error.message);

        res.status(500).json({
            status: 'error',
            message: 'Unable to submit booking.'
        });
    }
});
