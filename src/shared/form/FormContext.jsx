import React, {useContext} from 'react';

const FormContext = React.createContext({});

export const FormProvider = FormContext.Provider;

export const useFormContext = () => useContext(FormContext);

export default FormContext;
