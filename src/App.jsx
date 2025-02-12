import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems=[,"Salad","Milk"];

  //  let [textToShow,setTextState]= useState()

   let [foodItems,setFoodItems]=useState([
      "sbg",
      "green vegetable",
      "Roti",

   ]);
   const onKeyDown=(event)=>{
    if(event.key==="Enter"){
      let newFoodItem=event.target.value;
      event.target.value="";
      let newItems=[...foodItems,newFoodItem];
      setFoodItems(newItems);
    }
    // console.log(event.target.value);
    // setTextState(event.target.value);

   };


  return (
    <>
    <Container>
    <h1 className="food-heading">Healthy food </h1>
   
    <FoodInput handleKeyDown={onKeyDown}></FoodInput>
    <ErrorMsg items={foodItems}></ErrorMsg>
   
   <FoodItems items={foodItems}></FoodItems>
 

   </Container>
   </>
  );
}

export default App;
