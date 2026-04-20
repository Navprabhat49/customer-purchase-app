import { LogLevel } from '@azure/msal-browser';

export const msalConfig = {
    auth: {
        clientId: 'da6f1cfd-5a16-4aa4-a8f9-526ecab698ea', 
        authority: 'https://login.microsoftonline.com/597aa0a6-1546-4d8a-af67-47abe9558f00/', 
        redirectUri: '/', 
        postLogoutRedirectUri: '/', 
        navigateToLoginRequestUrl: false, 
    },
    cache: {
        cacheLocation: 'sessionStorage', 
        storeAuthStateInCookie: false, 
    },
    system: {
        loggerOptions: {
            loggerCallback: (level: any, message: any, containsPii: any) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};


export const loginRequest = {
    scopes: ["User.Read"],
};