import {sendDeleteRequest, sendGetRequest, sendPostRequest, sendPutRequest} from "./requests";
import useAuthentication from "../../authentication/authenticationService";

const baseUrl = "http://localhost:8082/api/v1";

export const useUnauthenticatedRequest = () => {
    return {
        sendPostRequest: (url, body) => sendPostRequest(baseUrl + url, body),
        sendGetRequest: (url) => sendGetRequest(baseUrl + url)
    }
};

export const useAuthenticatedRequest = () => {
    const { getToken } = useAuthentication();


    const header = {
        'Authorization': 'Bearer ' + getToken()
    };

    return {
        sendPostRequest: (url, body) => sendPostRequest(baseUrl + url, body, header),
        sendPutRequest: (url, body) => sendPutRequest(baseUrl + url, body, header),
        sendDeleteRequest: (url, body) => sendDeleteRequest(baseUrl + url, header),
        sendGetRequest: (url) => sendGetRequest(baseUrl + url, header)
    }
};