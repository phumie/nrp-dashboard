export class Transaction {
    transactionId: number;
    description: string;
    dateTime: Date;
    amount: number;
    increase: boolean;
    isCopy: boolean;
    accountsId: number;
}
