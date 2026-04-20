import { useMsal } from "@azure/msal-react"

export const useAccessToken = () => {

    const {instance, accounts} = useMsal();

    const getToken = async() => {
        const request = {

            scopes: ["api://da6f1cfd-5a16-4aa4-a8f9-526ecab698ea/access_as_user"],
            account: accounts[0],

        };
        const response = await instance.acquireTokenSilent(request);
        return response.accessToken;
    };

    return {getToken};

};