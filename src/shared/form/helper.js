import {HTTP_STATUS} from "../api/const";
import {useHistory} from "react-router-dom";

const handleError = (error, setError, history) => {
    if (error.status === HTTP_STATUS.BAD_REQUEST) {

        error.json().then(errorJson => {
            setError(errorJson.message)
        });
    } else if (error.staus === HTTP_STATUS.UNAUTHORIZED) {
        history.push('/login')
    } else {
        setError('Server error. Please, try again')
    }
};


export const useOnSubmit = (setError, setInfo, request, url) => {
    const history = useHistory();

    return (values, {setSubmitting}) => {
        request(url, values)
            .then(() => {
                setInfo('Done');
                setError(null);
            })
            .catch(errorResponse => {
                handleError(errorResponse, setError, history);
                setInfo(null);
            })
            .finally(() => setSubmitting(false))
    };
}