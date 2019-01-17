import { Client } from '../client/client';
import {RfqItem } from './rfqItems';

export class Rfq {
    quoteId: number;
    accepted: boolean;
    responseDate: Date;
    referenceNumber: string;
    name: string;
    dateTime: Date;
    isOpen: boolean;
    subTotal: number;
    vat: number;
    total: number;
    terms: number;

    ClientsId: number;
    Client?: Client;
    QuoteItems?: RfqItem[];
}
