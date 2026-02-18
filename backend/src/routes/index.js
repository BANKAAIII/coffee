import express from "express";
import { addStaff, removeStaff } from "../controllers/Owner/manageStaff.js";
import { registerUser } from "../controllers/User/register.js";


const router = express.Router();

//Base Route for an user to register
router.post("/register",registerUser);

// OwnerRoutes
router.post("/owner/addStaff",addStaff);

// Staff Routes
// Customer Route

export default router;