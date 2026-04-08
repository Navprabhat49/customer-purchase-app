import { createPurchase } from "../services/PurchaseService";
import "../Styles/CustomerPurchaseForm.css";
import { useReportContext } from "../hooks/ReportContext";

const CustomerPurchaseForm = ({onSuccess}: {onSuccess: () => void}) => {

    const {dashboardFilters, setDashboardFilters} = useReportContext();

    const handleSubmit = async(e: React.SubmitEvent) => {
        e.preventDefault();
        const payload = {
            ...dashboardFilters
        };

        try {
            const res = await createPurchase(payload);
            console.log("Success: ", res);
            alert("Purchase created successfully!!");
            onSuccess();
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
                <input type = "text" placeholder="Customer Name" value={dashboardFilters.customerName} 
                      onChange = {(e) => setDashboardFilters({...dashboardFilters, customerName: e.target.value})}  required/>
            </div>
            <h3>Products</h3>
            <div className="form-group">
                <label>Product Name</label>
                <input type="text" placeholder="Product Name" value={dashboardFilters.product}
                onChange={(e) => setDashboardFilters({...dashboardFilters, product: e.target.value})} />
            </div>
            <div className="form-group">
                <label>Quantity</label>
                <input type="number" value = {dashboardFilters.quantity}
                onChange={(e) => setDashboardFilters({...dashboardFilters, quantity: Number(e.target.value)})} />
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="number" value={dashboardFilters.price} 
                onChange={(e) => setDashboardFilters({...dashboardFilters, price: Number(e.target.value)})} />
            </div>

            <button type="submit" className="submit-btn">Submit</button>

        </form>
        </div>
    )
}

export default CustomerPurchaseForm;