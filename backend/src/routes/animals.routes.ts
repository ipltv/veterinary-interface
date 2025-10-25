// backend/src/routes/animals.routes.ts
import { Router } from "express";
import { animalsController } from "../controllers/animals.controller.js";
import { validateId } from "../middleware/validateId.middleware.js";
import { eventsController } from "../controllers/events.controller.js";

const router = Router();

//GET /animals: Lists all animals.
router.get("/", animalsController.getAllAnimals);
//GET /animals/:id: Fetches details of an animal along with its events.  
router.get("/:id", validateId, animalsController.getAnimalsById);
//POST /animals: Adds a new animal.
router.post("/", animalsController.createAnimal);

//POST /animals/:id/events: Adds an event for an animal.  
router.post("/:id/events", validateId, eventsController.createEventForAnimal);
//GET /animals/:id/events: Lists all events for an animal.
router.get("/:id/events", validateId, eventsController.getEventsByAnimalId);

export default router;
