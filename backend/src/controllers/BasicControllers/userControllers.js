import {PrismaClient} from "@prisma/client"
const prisma  = new PrismaClient();
const saltRounds = parseInt(process.env.SALT_ROUNDS);
import * as bcrypt  from "bcrypt"


if(!saltRounds){
    throw new Error("Salt not detected");
}


//hashing and salting of the password
export const hashing = async(password) =>{
    console.log("passoword :", password);
    console.log("salt :", saltRounds);
    const bcrypting = await bcrypt.hash(password,saltRounds);
    if(!bcrypting){ throw new Error("password hashing controller failed ") }
    return bcrypting;
}
    

// User related CRUD routes

//CREATE-USER:
// create new users
export const addUsers = async(role,{baseCreds}) =>{
    const addUser = await prisma.User.create({
            data:{
                name:   baseCreds.name,
                email:  baseCreds.email,
                password : baseCreds.password, //"here insert the hashed password " 
                phoneNumber:  baseCreds.phoneNumber,
                role:role
            }
    });

    return addUser;
}

//DELETE-USER:
// remove old users
export const removeUsers = async({baseCreds}) =>{
    const deleteUser = await prisma.User.delete({
        where:{
            email : baseCreds.email,
           
        }
    })

    if(!deleteUser){
        throw new Error("user deletion baseHelper failed")
    }
}

//FETCH-UNIQUE:
//user db check
export const userDbCheck = async( cred ) => {

    // Example =  cred{ unique : eg.email, comparing : "field to be compared" }
    
    const check = await prisma.User.findFirst({
        where:{
            AND: Object.entries(cred).map( ([field,value]) => ({ [field] : value }) )
        }
    });


   return !!check;
}

export const fetchUser = async(email) => {
     const fetching = await prisma.User.findUnique({
        where:{
            email: email
        }
     });
     console.log(fetching);
     return fetching;
}


//UPDATE-USER:
//pass hashed passsword as password.
export const userUpdate = async({ baseCreds }) =>{
     const updatedUser = await prisma.User.update({
        where:{
            email:baseCreds.email,
        },
        data:{
           name:baseCreds.name,
           password:baseCreds.password,
           phoneNumber:baseCreds.phoneNumber
        }
    })

    return updatedUser;
}


//Category related base helpers

//repetition check
export const repetitionCheck = async({categoryDetails}) =>{
    const checkRepetition = await prisma.Category.findFirst({
        where:{
            
                title:categoryDetails.title
           
        }
    })

    if( checkRepetition.title === categoryDetails.title && checkRepetition.description === categoryDetails.description ){
    return false;
    }
    else{
        return true;
    }
}

//fetch category
export const categoryCheck = async({categoryDetails}) => {
    const check = await prisma.Category.findFirst({
        where:{
            
                title:categoryDetails.title
           
        }
    })

    //check = true ? category exists : dosent
    return !!check
}

// create category
export const createCategory = async({categoryDetails}) => {
    const creation = await prisma.Category.create({
        data:{
            title:categoryDetails.title,
            description:categoryDetails.description
        }
    });

    return !!creation
}

// update category 

export const updateCategory = async({categoryDetails}) => {
    const updating = await prisma.Category.update({
        where:{
            title:categoryDetails.title
        },
        data:{
            title:categoryDetails.title,
            description: categoryCheck.description

        }
    })

    return !!updating
}

// Delete category

export const deleteCategory = async({categoryDetails}) => {
    const deleting = await prisma.Category.delete({
        where:{
            and:{
                title:categoryDetails.title,
                description:categoryDetails.description
            }
        }
    })

    return !!deleting;
}