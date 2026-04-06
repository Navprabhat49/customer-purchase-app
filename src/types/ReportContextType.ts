import type { PurchaseResponse } from "./PurchaseResponse";

export type Filters = {
    startDate: string,
    endDate: string,
    customerName: string
};

export type ReportContextType = {
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
    data: PurchaseResponse[];
    setData: React.Dispatch<React.SetStateAction<PurchaseResponse[]>>;
    hasSearched: boolean;
    setHasSearched: React.Dispatch<React.SetStateAction<boolean>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}