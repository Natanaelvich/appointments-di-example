import { Router } from "express";
import { CreateAppointmentsController } from "../controllers/create-appointments.controller";

const route = Router();

const createAppointmentsController = new CreateAppointmentsController();

route.post("appointments", createAppointmentsController.handle);
