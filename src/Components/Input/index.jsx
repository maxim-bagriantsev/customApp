import React, {useEffect, useState} from "react";

function useLogger(value) { // Базовый кастомный хук который будет отслеживать изменение какой- то переменной в данном случае value
    useEffect(() => {
        console.log("Value changed:", value)
    }, [value])
}

function useInput(initialValue) { //Базовый кастомный хук useInput
    const [value, setValue] = useState(initialValue)

    const onChange = event => {
        setValue(event.target.value)
    }
    const clear = () => setValue('')

    return {
        bind: {value, onChange},
        value,
        clear
    }
}

export const Input = () => {
    const input = useInput('')
    const lastName = useInput('')

    useLogger(input.value) // используем наш хук и передаем значение input.value ему

    return (
        <div>
            <input type="text" {...input.bind}/>
            <input type="text" {...lastName.bind}/>
            <button onClick={() => input.clear()}>Clear name</button>
            <button onClick={() => lastName.clear()}>Clear lastname</button>
            <h1>{input.value} </h1>
            <h1>{lastName.value} </h1>
        </div>
    )
}