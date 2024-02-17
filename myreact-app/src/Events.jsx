import { useState } from "react";

function Events(){

    const[name,setName] = useState("Farriah");
    const[quantity,setQuantity] = useState(1);
    const[shipping,setShipping] = useState("");
    function handleNameChnage(event){
        setName(event.target.value);
    }
    function handleQuantity(event){
        setQuantity(event.target.value);
    }
    function handleShippingChnage(event){
        setShipping(event.target.value);
    }
    return(
        <div>
            <input value={name} onChange={handleNameChnage}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantity} type="Number"></input>
            <p>Quantity: {quantity}</p>
        <label>
            <input type="radio" value="Pick up"
            checked={shipping === "Pick up"}
            onChange={handleShippingChnage}></input>
            Pickup
        </label>
        <br/>
        <label>
            <input type="radio" value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShippingChnage}>
            </input>
            Delivery
        </label>
        <p>Shipping Method: {shipping}</p>
        </div>
        
    )
}

export default Events;