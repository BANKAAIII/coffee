import express from "express";
import { addStaff, removeStaff } from "../../controllers/Owner/manageStaff";

const router = express.Router();

// Add new Staff
router.post("/addStaff",addStaff);

// remove staff 
router.delete("/removeStaff",removeStaff);

export default router;
