export interface PurchaseResponse {
    id: number,
    customerName: String;
    product: String;
    quantity: number;
    price: number;
    amount: number;
    createdAt: Date;
}