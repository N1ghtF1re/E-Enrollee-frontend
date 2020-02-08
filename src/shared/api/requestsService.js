import {sendGetRequest, sendPostRequest} from "./requests";

const baseUrl = "http://localhost:8082";

export const useUnauthenticatedRequest = () => {
    return {
        sendPostRequest: (url, body) => sendPostRequest(baseUrl + url, body),
        sendGetRequest: (url) => sendGetRequest(baseUrl + url)
    }
};