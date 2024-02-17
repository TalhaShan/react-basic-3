import { useState } from "react";

function MyComponent(){

    const[name,setName] = useState("Talha");
    const[age,setAge] = useState(0);
    const[isEmployed,setIsEmployed] = useState(false);


    const updateName= () =>{
        setName("Farriah")
    }

    const updateAge=()=>{
        setAge(age+1);
    }

    
    const toggleIsEmployed=()=>{
        setIsEmployed(!isEmployed);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Update Age</button>

            <p>Employeed : {isEmployed ? 'Yes' : 'No'}</p>
            <button onClick={toggleIsEmployed}>Toggle Employee Status</button>
        </div>
    )
}

export default MyComponent;