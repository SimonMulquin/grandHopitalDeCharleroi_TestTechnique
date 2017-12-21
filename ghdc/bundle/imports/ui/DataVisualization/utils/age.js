import moment from 'moment';
//calcul de l'age
const age = (date)=>(moment(date, "YYYYMMDD").fromNow().split(" ")[0]);

export default age;
