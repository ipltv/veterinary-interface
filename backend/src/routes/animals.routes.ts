// backend/src/routes/animals.routes.ts
import { Router } from "express";
import { animalsController } from "../controllers/animals.controller.js";

const router = Router();

//GET /animals: Lists all animals.
router.get("/", animalsController.getAllAnimals);
//GET /animals/:id`: Fetches details of an animal along with its events.  
router.get("/:id", animalsController.getAnimalsById);
//POST /animals: Adds a new animal.  
router.post("/", animalsController.createAnimal);

export default router;
