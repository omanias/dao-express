class ContactsMemory {
    constructor() {
        this.contacts = [];
    }

    async get() {
        return this.contacts;
    }

    async create(contact) {
        this.contacts.push(contact);
        return contact;
    }
}

export default ContactsMemory;
