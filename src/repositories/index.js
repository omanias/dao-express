import { Contacts } from "../dao/factory.js"; // Importa la clase de contacto desde factory
import ContactRepository from "./Contacts.repository.js"; // Importa el repositorio de contactos

let contactService; // Variable para almacenar la instancia del servicio

// Función asíncrona para obtener el servicio de contactos
async function getContactService() {
    if (!contactService) {
        if (!Contacts) {
            throw new Error("Contacts not initialized"); // Lanza un error si Contacts no está inicializado
        }
        contactService = new ContactRepository(new Contacts()); // Crea una nueva instancia del repositorio
    }
    return contactService; // Devuelve la instancia del servicio
}

// Exporta la función para que pueda ser utilizada en otros módulos
export { getContactService };
