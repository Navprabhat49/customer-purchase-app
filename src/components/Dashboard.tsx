import CustomerPurchaseForm from "./CustomerPurchaseForm"
import PurchaseList from "./PurchaseList";
import {useState} from "react";
import "../Styles/Dashboard.css";

const Dashboard = () => {
    const [refresh, setRefresh] = useState(false);

    const triggerRefresh = () => {
        setRefresh(prev => !prev);
    }
    return (
        <div>
            <div className="dashboard-container">
                <div className="card">
                    <CustomerPurchaseForm onSuccess={triggerRefresh}/>
                </div>
                {refresh && (<div className="card">
                    <PurchaseList refresh={refresh}/>
                </div>) }
            </div>
        </div>
    )
}

export default Dashboard;