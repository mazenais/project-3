import React, { useState } from 'react'

const List = () => {

    const [data, setData] = useState(["hi", "guys", "what's up"]) 

    const [input, setInput] = useState(" ")

    const onInputChange = (e) => {
        console.log(`e :>>`, e.target.value);
        setInput(e.target.input.value)
    }
    const addToData = (text) => {
        console.log(`foo :>>`,text); 
    }
    console.log(`input :>>`, input)
    return (
        <div>
           {
               data.map(item => {
                   return (
                       <p key={item}>{item}</p>
                   )
               })
           } 
           <input type="text" value= {input} onChange={onInputChange}></input>
           <button onClick={() => addToData("hi")}>add</button>
        </div>
    )
}

export default List
