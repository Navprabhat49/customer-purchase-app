import {useEffect} from "react";
import { getAllPurchase } from "../services/PurchaseService";

import "../Styles/PurchaseList.css";
import { useReportContext } from "../hooks/ReportContext";
import { useAccessToken } from "../auth/hooks/useAccessToken";

const PurchaseList = ({refresh} : {refresh: boolean}) => {

    const {purchaseData, setPurchaseData} = useReportContext();

    const {getToken} = useAccessToken();

    const fetchPurchaseDetails = async() => {
        const token = await getToken();
        const response = await getAllPurchase(token);
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