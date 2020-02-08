import {useUnauthenticatedRequest} from "../shared/api/requestsService";
import {useHistory} from "react-router-dom";

const getToken = () => {
    return localStorage.getItem('jwt');
};

const setToken = (token) => {
    localStorage.setItem('jwt', token);
};

const useAuthentication = () => {
    const { sendGetRequest } = useUnauthenticatedRequest();
    const history = useHistory();

    return {
        authenticate: (token) => {
            setToken(token);
            history.replace('/');
        },
        isAuthenticated: async () => {
            const token = getToken();
            if (token === undefined) return false;
            const checkTokenResponse = await sendGetRequest('/token/check?jwt=' + token);
            const json = await checkTokenResponse.json();

            if (json.valid) {
                return true;
            } else {
                setToken(undefined);
                return false;
            }
        },
        getToken: getToken
    }
};

export default useAuthentication;