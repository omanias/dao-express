import { Router } from "express";
import { getContactService } from "../repositories/index.js"; // Importa la función para obtener el servicio
import ContactDTO from "../dao/DTOs/contact.dto.js";

const router = Router();

router.get("/", async (req, res) => {
    const contactService = await getContactService(); // Obtén el servicio de contactos
    let result = await contactService.get(); // Llama al método get del servicio
    res.send({ status: "success", payload: result }); // Envía la respuesta
});

router.post("/", async (req, res) => {
    const contactService = await getContactService(); // Obtén el servicio de contactos
    let { first_name, last_name, phone } = req.body;

    let contact = new ContactDTO({ first_name, last_name, phone });
    let result = await contactService.create(contact); // Llama al método create del servicio
    res.send({ status: "success", payload: result }); // Envía la respuesta
});

export default router; // Exporta el router para que pueda ser utilizado en app.js
