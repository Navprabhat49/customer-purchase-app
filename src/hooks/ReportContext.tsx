import { createContext, useContext, useState } from "react";
import type { PurchaseResponse } from "../types/PurchaseResponse";
import type { Filters, DashboardFilters, ReportContextType } from "../types/ReportContextType";


const ReportContext = createContext<ReportContextType | undefined>(undefined);

export const ReportProvider = ({ children }: { children: React.ReactNode }) => {

    const [filters, setFilters] = useState<Filters>({
        startDate: "",
        endDate : "",
        customerName: "",
    });

    const [dashboardFilters, setDashboardFilters] = useState<DashboardFilters>({
        customerName: "",
        product: "",
        quantity: 0,
        price: 0
    })

    const [data, setData] = useState<PurchaseResponse[]>([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [error, setError] = useState<string>("");
    const [purchaseData, setPurchaseData] = useState<PurchaseResponse[]>([]);
    const [dashboardRefresh, setDashboardRefresh] = useState(false);

    return (
        <ReportContext.Provider value={{filters, setFilters, data, setData, hasSearched, setHasSearched, 
        error, setError, dashboardFilters, setDashboardFilters, purchaseData, setPurchaseData, dashboardRefresh, setDashboardRefresh}}>
            {children}
        </ReportContext.Provider>
    );
};

export const useReportContext = () => {
    const context = useContext(ReportContext);

    if(!context){
        throw new Error("useReportContext must be used within Report provider");
    }

    return context;
};

