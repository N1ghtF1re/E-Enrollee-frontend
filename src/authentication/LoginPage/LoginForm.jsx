import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import Form from "../../shared/form/Form";
import TextInput from "../../shared/form/inputs/TextInput";
import PasswordInput from "../../shared/form/inputs/PasswordInput";
import {useUnauthenticatedRequest} from "../../shared/api/requestsService";
import {HTTP_STATUS} from "../../shared/api/const";
import useAuthentication from "../authenticationService";
import { useHistory } from "react-router-dom";

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required("Required"),
    password: Yup.string()
        .required("No password provided.")
});

const handleError = (errorCode, setError) => {
    if (errorCode === HTTP_STATUS.UNAUTHORIZED) {
        setError('Invalid username or password')
    } else {
        setError('Server error. Please, try again')
    }
};

const ValidatedLoginForm = () => {
    const [error, setError] = useState('');
    const {sendPostRequest} = useUnauthenticatedRequest();
    const {authenticate, isAuthenticated} = useAuthentication();
    const history = useHistory();

    useEffect(() => {
        isAuthenticated()
            .then(isUserAuthenticated => isUserAuthenticated && history.replace('/'));

    });

    return (
        <Form
            title='Login'
            initialValues={{username:'', password:''}}
            onSubmit={(values, {setSubmitting}) => {
                sendPostRequest('/auth', values)
                    .then(async (response) => {
                        const json = await response.json();
                        authenticate(json.token);
                    })
                    .catch(error => handleError(error.status, setError))
                    .finally(() => setSubmitting(false))
            }}

            validationSchema={validationSchema}
            error={error}
        >
            <TextInput fieldName='username'/>
            <PasswordInput fieldName='password'/>
        </Form>
    )
};

export default ValidatedLoginForm;
