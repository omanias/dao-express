import { Router } from "express";
import { Contacts } from '../dao/factory.js'
import ContactDTO from "../dao/DTOs/contact.dto.js";
import ContactRepository from "../repositories/Contacts.repository.js";
// import Contacts from "../dao/mongo/contacts.mongo.js";
import { contactService } from "../repositories/index.js"

const router = Router()

const contactsServices = new Contacts()

router.get("/", async (req, res) => {
    let result = await contactsServices.get()
    res.send({ status: "success", payload: result })
})

router.post("/", async (req, res) => {
    let { name, last_name, phone } = req.body;

    let contact = new ContactDTO({ name, last_name, phone });
    console.log(contact);
    let result = await contactService.createContact(contact);
    console.log(result);
    res.send({ status: "success", payload: result });
});

export default router