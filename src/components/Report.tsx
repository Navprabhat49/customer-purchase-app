import { useState } from "react";
import { getPurchaseByCustomer, getPurchaseByDate } from "../services/PurchaseService";
import "../Styles/Report.css";
import { useReportContext } from "../hooks/ReportContext";
import { useAccessToken } from "../auth/hooks/useAccessToken";

const Report = () => {
    const {filters, setFilters, data, setData, hasSearched, setHasSearched, 
        error, setError} = useReportContext();
   
    const [loading, setLoading] = useState(false);

    const {getToken} = useAccessToken();

    const handleSearch = async() => {
        setLoading(true);
        setError("");
        try{
            const {dateData, nameData} = await getReportData(filters.startDate, filters.endDate, filters.customerName);
            const finalData = getIntersection(dateData, nameData);
            setData(finalData);
            setHasSearched(true);
        } catch(err) {
            console.log(err);
            setError("Something went wrong, try again later");
            setData([]);
            setHasSearched(true);
        } finally {
            setLoading(false);
        }
    }

    const getReportData = async(startDate: string, endDate: string, customerName: string) => {
        const token = await getToken();

        const [dateData, nameData] = await Promise.all([
            getPurchaseByDate(startDate, endDate, token),
            getPurchaseByCustomer(customerName, token)
        ]);

        return {dateData, nameData};
    };

    const getIntersection = (arr1: any, arr2: any) => {
        const arr1Data = arr1.customerPurchaseList;
        const arr2Data = arr2.customerPurchaseList;

        const ids = new Set(arr1Data.map((item : any) => item.id));

        return arr2Data.filter((item: any)=> ids.has(item.id));
    }

    return (
        <div className="report-container">
            <h2 className="report-title">Report</h2>
            <div className="report-form">
            <div className="form-group">
               <label>Start Date</label>
               <input type="date" value={filters.startDate} 
               onChange={(e) => setFilters({...filters,startDate: e.target.value})} />
            </div>
            <div className="form-group">
               <label>End Date</label>
               <input type="date" value={filters.endDate} 
               onChange={(e) => setFilters({...filters, endDate: e.target.value})} />
            </div>
            <div className="form-group">
                <label>Customer name</label>
                <input type="text" placeholder="Customer name" value={filters.customerName}
                onChange={(e) => setFilters({...filters, customerName: e.target.value})} />
            </div>
            <button className="search-btn" onClick={handleSearch} >Search</button>
            </div>

            <div className="report-results">
            {loading && <p className="info">Loading... </p>}
            {error && <p className="error">{error}</p>}

            {!loading && !error && data.length === 0 && (
                <p className="info">No Data found</p>
            )}

            {hasSearched && data.map((item: any) => (
                <div className="report-card" key={item.id}>
                    <h3>{item.customerName}</h3>
                    <p><strong>Product: </strong> {item.product} </p>
                    <p><strong>Quantity: </strong> {item.quantity}</p>
                    <p><strong>Price: </strong> {item.price}</p>
                    <p><strong>Amount: </strong> {item.amount}</p>
                    <p className="date">{new Date(item.createdAt).toLocaleDateString()}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Report;