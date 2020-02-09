import {HTTP_METHOD} from "./const";
import {formatDateToApiFormat} from "../dateUtils";

Date.prototype.toJSON = function() {
    return formatDateToApiFormat(this);
};


const handleResponse = async response => {
    if (response.ok || (response.status >= 200 && response.status < 300)) {
        return Promise.resolve(response);
    }

    return Promise.reject(response);
};



const sendRequest = (url, method, body, headers) => {
    const init = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...headers
        },
        body: body && JSON.stringify(body)
    };
    return fetch(url, init)
        .then(handleResponse)
        .catch(err => Promise.reject(err));
};

export const sendPostRequest = (url, body, headers) => sendRequest(url, HTTP_METHOD.POST, body, headers);
export const sendPutRequest = (url, body, headers) => sendRequest(url, HTTP_METHOD.PUT, body, headers);

export const sendGetRequest = (url, header) => sendRequest(url, HTTP_METHOD.GET, undefined, header);
export const sendDeleteRequest = (url, header) => sendRequest(url, HTTP_METHOD.DELETE, undefined, header);