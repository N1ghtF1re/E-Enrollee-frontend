import {useEffect, useState} from "react";
import {useUnauthenticatedRequest} from "../../shared/api/requestsService";
import useAuthentication from "../authenticationService";
import {useHistory} from "react-router-dom";
import React from "react";
import TextInput from "../../shared/inputs/TextInput";
import PasswordInput from "../../shared/inputs/PasswordInput";
import FormLayout from "../../shared/form/FormLayout";
import * as Yup from "yup";
import {HTTP_STATUS} from "../../shared/api/const";

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(4, 'Username must contain at least 4 chars')
        .required("Required"),
    firstName: Yup.string()
        .required("Required")
        .matches(/[A-ZА-Я][a-zа-я]*/, 'First name must be in russian and start with big letter'),
    lastName: Yup.string()
        .required("Required")
        .matches(/[A-ZА-Я][a-zа-я]*/, 'Last name must be in russian and start with big letter'),
    middleName: Yup.string()
        .required("Required")
        .matches(/[A-ZА-Я][a-zа-я]*/, 'Middle name must be in russian and start with big letter'),
    password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
});

const handleError = (error, setError) => {
    if (error.status === HTTP_STATUS.BAD_REQUEST) {

        error.json().then(errorJson => {
            setError(errorJson.message)
        });
    } else {
        setError('Server error. Please, try again')
    }
};


const RegistrationForm = () => {
    const [error, setError] = useState('');
    const {sendPostRequest} = useUnauthenticatedRequest();
    const {authenticate, isAuthenticated} = useAuthentication();
    const history = useHistory();

    useEffect(() => {
        isAuthenticated()
            .then(isUserAuthenticated => isUserAuthenticated && history.replace('/'));

    });

    return (
        <FormLayout
            title='Registration'
            initialValues={{firstName:'', lastName:'', middleName: '', password: '', username: ''}}
            onSubmit={(values, {setSubmitting}) => {
                sendPostRequest('/registration', values)
                    .then(() => {
                        sendPostRequest('/auth', values)
                            .then(async (authResponse) => {
                                const json = await authResponse.json();
                                authenticate(json.token);
                            })
                            .catch(error => handleError(error, setError))
                            .finally(() => setSubmitting(false))
                    })
                    .catch(async(error) => {
                        setSubmitting(false);
                        handleError(error, setError)
                    });
            }}

            validationSchema={validationSchema}
            error={error}
        >
            <TextInput fieldName='firstName'/>
            <TextInput fieldName='lastName'/>
            <TextInput fieldName='middleName'/>
            <TextInput fieldName='username'/>
            <PasswordInput fieldName='password'/>
        </FormLayout>
    );
};

export default RegistrationForm;