import {useAuthorizationContext} from "./AuthorizationContext";

export const useAuthorization = ()  => {
    const roles = useAuthorizationContext();

    return {
        hasRole: (role) => {
            return roles && roles.includes(role);
        },
        hasOneOfRoles: (requestedRoles) => {
            if (requestedRoles.length === 0) {
                return true;
            }
            return requestedRoles.some(role => {
                return roles && roles.includes(role);
            })
        },
        rolesLoaded: roles !== false
    }
};