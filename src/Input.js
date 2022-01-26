import { useState } from "react/cjs/react.development"

export const Input = ({addTask}) =>{
    const [input, setInput] = useState('')
    const onInputChange = (e) =>{
        setInput(e.target.value)
    }
    const addTodo = () =>{
        addTask(input)
        setInput('')
    }
    return(
        <form>
            <input type='text' value={input} onChange={onInputChange}/>
            <button type='button' onClick={addTodo}>Add</button>
        </form>
    )
}