import { useMsal } from "@azure/msal-react"

export const useUserRoles = () => {
    const {accounts} = useMsal();

    const account = accounts[0];

    const roles = account?.idTokenClaims?.roles || [];

    return {
        roles,
        isReadWrite: roles.includes("ReadWrite"),
        isReadOnly: roles.includes("ReadyOnly"),
    };
};