import { Contact } from './contact';

export class Client {
    clientId?: number;
    clientName: string;
    vatNumber: string;
    address: string;
    contact: Contact;
}
