import mongoose from "mongoose";
import config from '../config/config.js';

console.log(config.persistence);

export let Contacts;

async function initializeContacts() {
    switch (config.persistence) {
        case "MONGO":
            await mongoose.connect("mongodb+srv://omarmanias:1234562024@cluster0.bxjfm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
            const { default: ContactsMongo } = await import('./mongo/contacts.mongo.js');
            Contacts = ContactsMongo; // Asegúrate de que esto sea una clase
            break;
        case "MEMORY":
            const { default: ContactsMemory } = await import("./memory/contacts.memory.js");
            Contacts = ContactsMemory; // Asegúrate de que esto también sea una clase
            break;
        default:
            throw new Error("No valid persistence option specified");
    }
}

await initializeContacts(); // Llama a la función asíncrona

// Ahora puedes usar `Contacts` como una clase en otras partes de tu aplicación
