import { useState } from "react"

function NewSkill({key, label, count}){
    const [value, setValue] = useState("");
    return (
        <div key={key} className="skills questions">
            <label htmlFor={`skill${count}`}>{label}</label>
            <input value={value} onChange={(e)=>setValue(e.target.value) } type="text" name={`skill${count}`} id={`skill${count}`} />
        </div>  
    )
}

export default NewSkill