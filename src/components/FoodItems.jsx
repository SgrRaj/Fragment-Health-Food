import Item from "./Item";
const FoodItems=({ items })=>{

  //let foodItems=["Daal","green vegetable","Roti","Salad","Milk"];

  return (<>
    <ul className="list-group">

    {items.map((item)=>
       (
        <Item key={item} 
        foodItem={item}
        handleBuyButton={()=> console.log('${item} bought')}
        ></Item>
       ))}
 
</ul>
</>
  );
};
 export default FoodItems;