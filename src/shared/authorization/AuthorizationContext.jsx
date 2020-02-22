import React, {useContext, useEffect, useState} from 'react';
import {useAuthenticatedRequest} from "../api/requestsService";
import useAuthentication from "../../authentication/authenticationService";
import Loader from "react-loader";

const AuthorizationContext = React.createContext({});

export const AuthorizationProvider = ({children}) => {
    const [roles, setRoles] = useState(false);
    const {sendGetRequest} = useAuthenticatedRequest();
    const { isAuthenticated } = useAuthentication();

    useEffect(() => {
        const doAuthorizationRequest = async () => {
            const authenticated = await isAuthenticated();
            if (authenticated) {
                authenticated && sendGetRequest('/me/roles')
                    .then(response => {
                        response.json().then(json => {
                            setRoles(json)
                        })
                    })
            } else {
                setRoles([])
            }
        };
        doAuthorizationRequest();
    }, []);

    return (
        <Loader loaded={roles !== false}>
            <AuthorizationContext.Provider value={roles}>
                {children}
            </AuthorizationContext.Provider>
        </Loader>
    )
};

export const useAuthorizationContext = () => useContext(AuthorizationContext);

export default AuthorizationContext;
