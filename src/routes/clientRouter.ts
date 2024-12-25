import express from "express";
import {getClientByID, createClient, updateClient} from "../controllers/clientController";

const router = express.Router();

router.route('/')
    .post(createClient);

router.route('/:id')
    .patch(updateClient)
    .get(getClientByID);


export default router;