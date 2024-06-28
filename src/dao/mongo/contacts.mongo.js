import contactsModel from './models/Contacts.js';

export default class Contacts {
    constructor() { }

    get = async () => {
        let contacts = await contactsModel.find();
        return contacts;
    }

    create = async (contact) => {
        let newContact = await contactsModel.create(contact);
        return newContact;
    }
}