import {useState} from "react";
import { createPurchase } from "../services/PurchaseService";
import "../Styles/CustomerPurchaseForm.css";

const CustomerPurchaseForm = ({onSuccess}: {onSuccess: () => void}) => {
    const [customerName, setCustomerName] = useState("");
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);

    const handleSubmit = async(e: React.SubmitEvent) => {
        e.preventDefault();
        const payload = {
            customerName,
            product,
            quantity,
            price
        };

        try {
            const res = await createPurchase(payload);
            console.log("Success: ", res);
            alert("Purchase created successfully!!");
            onSuccess();
            setCustomerName("");
            setProduct("");
            setQuantity(0);
            setPrice(0);
        } catch (error) {
            console.error(error);
            alert("Error while creating the Purchase");
        }
    }

    return (
        <div className="form-container">
        <form onSubmit = {handleSubmit} className="form-card">
            <h2>Create Purchase</h2>
            <div className="form-group">
                <label>Customer Name</label>
                <input type = "text" placeholder="Customer Name" value={customerName} 
                      onChange = {(e) => setCustomerName(e.target.value)}  required/>
            </div>
            <h3>Products</h3>
            <div className="form-group">
                <label>Product Name</label>
                <input type="text" placeholder="Product Name" value={product}
                onChange={(e) => setProduct(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Quantity</label>
                <input type="number" value = {quantity}
                onChange={(e) => setQuantity(Number(e.target.value))} />
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="number" value={price} 
                onChange={(e) => setPrice(Number(e.target.value))} />
            </div>

            <button type="submit" className="submit-btn">Submit</button>

        </form>
        </div>
    )
}

export default CustomerPurchaseForm;