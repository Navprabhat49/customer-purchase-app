import type { Purchase } from "../types/purchase";

const BASE_URL = import.meta.env.VITE_API_URL;

export const createPurchase = async(data: Purchase) => {
    const response = await fetch(`${BASE_URL}/purchase`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if(!response.ok){
        throw new Error("Failed to create purchase");
    }

    return response.json();
}

export const getAllPurchase = async() => {
    const response = await fetch(`${BASE_URL}/purchase`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if(!response.ok){
        throw new Error("Failed to fetch the purchase list");
    }

    return response.json();
}

export const getPurchaseByDate = async (startDate: String, endDate: String) => {
    const res = await fetch(`${BASE_URL}/purchase?startDate=${startDate}&endDate=${endDate}`);

    if(!res.ok){
        throw new Error("Failed to fetch the purchase list based on dates");
    }

    return res.json();
}

export const getPurchaseByCustomer = async(customerName: String) => {
    const res = await fetch(`${BASE_URL}/purchase?customerName=${customerName}`);

    if(!res.ok){
        throw new Error("Failed to fetch the purchase list based on customer name");
    }

    return res.json();
}

