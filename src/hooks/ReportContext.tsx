import { createContext, useContext, useState } from "react";
import type { PurchaseResponse } from "../types/PurchaseResponse";
import type { Filters, ReportContextType } from "../types/ReportContextType";


const ReportContext = createContext<ReportContextType | undefined>(undefined);

export const ReportProvider = ({ children }: { children: React.ReactNode }) => {

    const [filters, setFilters] = useState<Filters>({
        startDate: "",
        endDate : "",
        customerName: "",
    });

    const [data, setData] = useState<PurchaseResponse[]>([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [error, setError] = useState<string>("");

    return (
        <ReportContext.Provider value={{filters, setFilters, data, setData, hasSearched, setHasSearched, error, setError}}>
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

