import {PrismaClient} from "@prisma/client"
const prisma  = new PrismaClient();

import { addUsers, fetchUser, hashing, removeUsers } from "../BasicControllers/userControllers.js";
import { userDbCheck } from "../BasicControllers/userControllers.js";
// All the routes to manage the staff.


// 1.Add staff
export  const addStaff = async(req,res) =>{ 
    //Next auth check
    //get the user details from the session of the OWNER.

    try{

    // Dummy owner credentials.
    const dummyOwnerPassword = "already hashed";
    const dummyOwnerEmail = "email";

    // validare the owners existance as well as the role.
    //const user = await fetchUser(dummyOwnerEmail);

    const user = {
        name:"Alice Johnson",
        role:'OWNER'
    }
    console.log("user :", user);

    if(!user || user.role !== "OWNER") { return res.status(409).json({
        message:"Unauthorized"
    }) }

    //Information for new Staff employee.
    const { name, email, phoneNumber, password } = req.body;

    if( !name || !email || !phoneNumber || !password ) {
        return res.status(409).json({
            message:"enter all basic credentials"
        })
    }

    // hash and salt the password with bcrypt through a helper funtion
    const hashedPassword =  await hashing("dummy passowrd");
    const creds = { name:name, email:email, phoneNumber:phoneNumber, password:hashedPassword }



    //email existance check
    const exists = await userDbCheck({email:email});
    if(exists){
        return res.status(409).json({
            message:"the user already exists"
        })
    } 

    // Creating account for the staff member.
    const staff = await addUsers("STAFF",{ baseCreds:creds });


const staffResponse = {
    ...staff,
    phoneNumber: staff.phoneNumber.toString()
};
    
    return res.status(200).json({
        message:"staff added successfully",
        staffResponse
    })

    } catch(err){
        return res.status(500).json({
            message:"try-catch block failed",
            error:err instanceof Error? err.message : JSON.stringify(err)
        })
    }


}

// flow for removing staff
// Owner Creds from session
// Check owners existance in db
// destructure staff credentials for deleting
// remove staff
// display result of remove staff helper

export const removeStaff = async(req,res) =>{
    //NextAuth check

    // Dummy Owner Creds
    const dummyOwnerEmail = "alice10@example.com";
    const dummyOwnerPassword = "$2b$10$tUuDBUfWNPylcEapATcXduU2zyQB1uOGeeQtEYqdtGahcFsOoCeQ2";
    const dummyOwnerRole = "OWNER";

    //validate is the user is atcually an owner
    if(dummyOwnerRole !== "OWNER"){
        return res.status(409).json({
            message:"Unauthorized"
        })
    }

    //validate owner
    const creds = {
        email : "alice10@example.com",
        password : "$2b$10$tUuDBUfWNPylcEapATcXduU2zyQB1uOGeeQtEYqdtGahcFsOoCeQ2",
        role : "OWNER"
            }
    const validatingOwner = await userDbCheck(creds);
     if(!validatingOwner){ return res.status(400).json({ message:"owner validation failed" }) }

     //Creds of the staff member
    const { name,email,phoneNumber } = req.body;
    if( !name || !email || !phoneNumber ){
        return res.status(400).json({
            message:"enter the name,email,phone of the staffMember"
        })
    }

    //validate the staff Info
    const staffCheck = await userDbCheck(
        baseCreds={
            email:email,
            phoneNumber:phoneNumber,
            name:name
        }
    )

     if(!staffCheck){ return res.status(400).json({ message:"owner DB check failed" }) }

    const deletion = await removeUsers(email);

    return res.status(200).json({
        message:"staff deletion successfull",
        deletion
    })

}