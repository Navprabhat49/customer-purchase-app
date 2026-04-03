import {useEffect, useState} from "react";
import { getAllPurchase } from "../services/PurchaseService";

import "../Styles/PurchaseList.css";
import type { PurchaseResponse } from "../types/PurchaseResponse";



const PurchaseList = ({refresh} : {refresh: boolean}) => {

    const [purchaseData, setPurchaseData] = useState<PurchaseResponse[]>([]);

    const fetchPurchaseDetails = async() => {
        const response = await getAllPurchase();
        setPurchaseData(response.customerPurchaseList);
    }

    useEffect(() => {
        fetchPurchaseDetails();
    }, [refresh])

    return (
        <div className="purchase-container">
            <h2>Customer Purchases</h2>
            {purchaseData.length === 0 ? (
                <p>No Purchases found</p>
            ) : (
                <div className="purchase-grid">
                    {purchaseData.map((data) => (
                        <div key={data.id} className="purchase-card">
                            <h3>{data.customerName}</h3>
                            <p><strong>Product: </strong> {data.product} </p>
                            <p><strong>Quantity: </strong> {data.quantity}</p>
                            <p><strong>Price: </strong> {data.price}</p>
                            <p><strong>Amount: </strong> {data.amount}</p>
                            <p className="date">{new Date(data.createdAt).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PurchaseList;