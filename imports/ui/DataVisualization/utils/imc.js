const imc = (weight, size) => {
  return Math.round(weight/((size/100)*(size/100))*10000)/10000;
};
export default imc;
