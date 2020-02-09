import React, { useEffect, useState } from "react";
import EnumInput from "../../shared/form/inputs/EnumInput";
import { useAuthenticatedRequest } from "../../shared/api/requestsService";
import {ENROLLEES} from "../const";

const EnrolleeInput = ({ fieldName, label }) => {
  const [options, setOptions] = useState([]);
  const { sendGetRequest } = useAuthenticatedRequest();

  useEffect(() => {
      sendGetRequest(`/${ENROLLEES}`)
          .then(async (response) => {
              const json = await response.json();

              setOptions(
                  json.map(enrollee => {
                      return {
                          key: enrollee.id,
                          value: enrollee.firstName + ' ' + enrollee.lastName
                      }
                  })
              )
          });
  }, []);
  return <EnumInput fieldName={fieldName} label={label} options={options}/>;
};

export default EnrolleeInput;