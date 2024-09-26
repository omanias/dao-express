import { Router } from "express";
import { getContactService } from "../repositories/index.js";
import ContactDTO from "../dao/DTOs/contact.dto.js";

const router = Router();

router.get("/", async (req, res) => {
    const contactService = await getContactService();
    let result = await contactService.getContacts();
    res.send({ status: "success", payload: result });
});

router.post("/", async (req, res) => {
    const contactService = await getContactService();
    let { first_name, last_name, phone } = req.body;

    let contact = new ContactDTO({ first_name, last_name, phone });
    let result = await contactService.createContact(contact);
    res.send({ status: "success", payload: result });
});

export default router;
