import mongoose from "mongoose";
import config from '../config/config.js'

console.log(config)

export let Contacts
switch (config.persistence) {
    case "MONGO":
        const connection = mongoose.connect("mongodb+srv://123789:123789@cluster0.3lmci0d.mongodb.net/?retryWrites=true&w=majority")
        const { default: ContactsMongo } = await import('./mongo/contacts.mongo.js')
        Contacts = ContactsMongo
        break;
    case "MEMORY":
        const { default: ContactsMemory } = await import("./memory/contacts.memory.js")
        Contacts = ContactsMemory
        break

    default:

}