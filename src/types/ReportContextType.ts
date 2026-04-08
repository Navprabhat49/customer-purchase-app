import type { PurchaseResponse } from "./PurchaseResponse";

export type Filters = {
    startDate: string,
    endDate: string,
    customerName: string
};

export type DashboardFilters = {
    customerName: string,
    product: string,
    quantity: number,
    price: number
}

export type ReportContextType = {
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
    data: PurchaseResponse[];
    setData: React.Dispatch<React.SetStateAction<PurchaseResponse[]>>;
    hasSearched: boolean;
    setHasSearched: React.Dispatch<React.SetStateAction<boolean>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
    dashboardFilters: DashboardFilters;
    setDashboardFilters: React.Dispatch<React.SetStateAction<DashboardFilters>>;
    purchaseData: PurchaseResponse[];
    setPurchaseData: React.Dispatch<React.SetStateAction<PurchaseResponse[]>>;
    dashboardRefresh: boolean;
    setDashboardRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}