import CustomerPurchaseForm from "./CustomerPurchaseForm"
import PurchaseList from "./PurchaseList";
import "../Styles/Dashboard.css";
import { useReportContext } from "../hooks/ReportContext";

const Dashboard = () => {
    const {dashboardRefresh, setDashboardRefresh} = useReportContext();

    const triggerRefresh = () => {
        setDashboardRefresh(prev => !prev);
    }
    return (
        <div>
            <div className="dashboard-container">
                <div className="card">
                    <CustomerPurchaseForm onSuccess={triggerRefresh}/>
                </div>
                {dashboardRefresh && (<div className="card">
                    <PurchaseList refresh={dashboardRefresh}/>
                </div>) }
            </div>
        </div>
    )
}

export default Dashboard;