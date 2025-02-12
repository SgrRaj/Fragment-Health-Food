const ErrorMsg=({ items })=>{

  //let foodItems=["Daal","green vegetable","Roti","Salad","Milk"];

  return <>
  {items.length===0 && <h3>I am still hungry</h3>}
  </>

  
};
export default ErrorMsg;
  