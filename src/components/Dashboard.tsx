import CustomerPurchaseForm from "./CustomerPurchaseForm"
import PurchaseList from "./PurchaseList";
import "../Styles/Dashboard.css";
import { useReportContext } from "../hooks/ReportContext";
import { useUserRoles } from "../auth/hooks/useUserRoles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
    const {dashboardRefresh, setDashboardRefresh} = useReportContext();

    const {isReadWrite} = useUserRoles();

    const navigate = useNavigate();

    const triggerRefresh = () => {
        setDashboardRefresh(prev => !prev);
    }

    useEffect( () => {
        console.log('Dashboard isReadWrite '+isReadWrite);
        if(isReadWrite===false){
           navigate('/reports');
        }
    }, [isReadWrite])

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