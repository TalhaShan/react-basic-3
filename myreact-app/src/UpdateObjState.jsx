import { useState } from "react"

function UpdateObjState(){

    const[car,setCar] = useState({
        year:2024,
        make: "Bmw",
        model: "amg"
    });

    function handleYearChange(event){
        // setCar(...car,{year:event.target.value})

        setCar(c =>({...c,year:event.target.value}))
    }
    
    function handleMakeChange(event){
        setCar(c =>({...c,make:event.target.value}))
    }

    
    function handleModelChange(event){
        setCar(c =>({...c,model:event.target.value}))
    }
    return( 
        <div>
            <p>My fav car is {car.make}, model is {car.model}, year is {car.year}</p>
            <input type= "number" value={car.year} onChange={handleYearChange}></input><br/>
            <input type= "text" value={car.make} onChange={handleMakeChange}></input><br/>
            <input type= "text" value={car.model} onChange={handleModelChange}></input><br/>
        </div>
    )
}

export default UpdateObjState
