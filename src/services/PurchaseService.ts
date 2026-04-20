import type { Purchase } from "../types/purchase";

const BASE_URL = import.meta.env.VITE_API_URL;

export const createPurchase = async(data: Purchase, token: string) => {

    const response = await fetch(`${BASE_URL}/purchase`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization : `Bearer ${token}`
        },
        body: JSON.stringify(data),
    });

    if(!response.ok){
        throw new Error("Failed to create purchase");
    }

    return response.json();
}

export const getAllPurchase = async(token: string) => {

    const response = await fetch(`${BASE_URL}/purchase`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization : `Bearer ${token}`
        }
    })

    if(!response.ok){
        throw new Error("Failed to fetch the purchase list");
    }

    return response.json();
}

export const getPurchaseByDate = async (startDate: String, endDate: String, token: string) => {

    const res = await fetch(`${BASE_URL}/purchase?startDate=${startDate}&endDate=${endDate}`,{
        method: "GET",
        headers : {
            "Content-Type": "application/json",
            Authorization : `Bearer ${token}`
        }
    });

    if(!res.ok){
        throw new Error("Failed to fetch the purchase list based on dates");
    }

    return res.json();
}

export const getPurchaseByCustomer = async(customerName: String, token: string) => {

    const res = await fetch(`${BASE_URL}/purchase?customerName=${customerName}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization : `Bearer ${token}`
        }
    });

    if(!res.ok){
        throw new Error("Failed to fetch the purchase list based on customer name");
    }

    return res.json();
}

