import React, { useState, useEffect } from 'react'
import ListItem from './ListItem'

const List = () => {



    const [data, setData] = useState()

    const [input, setInput] = useState("")
    useEffect(() => {
        console.log('useEffect :>> ');

    }, [data])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character/")
            const obj = await response.json()
            console.log('result :>> ', obj);
            setData(obj.results)
        }
        getData()
    }, [])


    const onInputChange = (e) => {
        console.log('e :>> ', e.target.value);
        setInput(e.target.value)
    }
    function onChange(e) {
        console.log('e :>> ', e);
    }

    const addToData = () => {
        const newArr = data
        newArr.push(input)
        console.log('newArr :>> ', newArr);
        setData([...data, input])



    }

    console.log('data :>> ', data);
    return (
        <div>
            {data && <ListItem character={data[9]} />}
            <h2>Functional</h2>
            {
                data && data.map((item, index) => {
                    return (
                        <ListItem key={item.id} character={item} />
                    )
                })
            }
            <input type="text" value={input} onChange={onInputChange}></input>
            <button onClick={addToData}>add</button>
        </div>
    )
}

export default List