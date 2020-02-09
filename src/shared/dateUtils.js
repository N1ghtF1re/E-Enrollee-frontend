import moment from "moment";


export const formatDateToReadableFormat = (date) => moment(date).format('DD.MM.YYYY');

export const formatDateToApiFormat = (date) => moment(date).format('YYYY-MM-DD');
