

// controller for a user to register

import { hashing, userDbCheck } from "../BasicControllers/userControllers.js";
import { addUsers } from "../BasicControllers/userControllers.js";

// flow
// 1.Get user information 
// 2.Check availability 
// 3.Create a new account for the user

export const registerUser = async(req,res) => {

    const { name, email, password, role,phoneNumber } = req.body;

    
    // check for availability.
    const availability = await userDbCheck({ email: email });
    if(availability){ return res.status(400).json({ message:" email already exists! " }) }

    //hash the passowrd before sending forward
    const hashedPassword =await hashing(password);
    //create new user
    const newUser = await addUsers(role,{baseCreds:{name:name, email:email, password:hashedPassword,phoneNumber:phoneNumber} });
    if(!newUser){ return res.staus(400).json({ message:"user creation failed in the controller." }) }

    return res.status(200).json({
        message:"new user successfully created",
        newUser
    })

}