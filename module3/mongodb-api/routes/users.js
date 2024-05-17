import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// ======= User document minimum requirements ====== //
/**
 * {
 *  "email": "test@test.com",
 *  "password": "password123",
 *  "username": "testuser1"
 * } 
 */

// ============== CRUD ====================== //

/**
 * Create a new user
 * POST /users/
 */





/**
 * Get all users
 * GET /users/
 */





/**
 * Get a single user by the id
 * GET /users/:id
 */





/**
 * Update an user by the id
 * PUT /users/:id 
 * (try the PUT method this time)
*/





/**
 * Delete an user by the id
 * DELETE /users/:id
 */




/**
 * Sign in a user
 * POST /users/signin
 */
router.post('/signin', async(req, res) => {
    // check if user exist
    // check if passwords are a match
    // req.body.password === user.password

    const user = await collection.findOne(req.body.email);

    if (!user) {
        res.send('User not found')
    }

    if (req.body.password !== user.password) {
        res.send('User not found')
    }

    res.send(user);
});



router.post('signup', async (req, res) => {
    // data validation
    // create a new user document
    // create a profile document
});

router.post('/reviews', async (req, res) => {
    
    const newReview = {
        user_id: req.body.userId, 
        text: req.body.text
    }

    const review = await collection.insertOne(newReview);
});




export default router;