import { useState } from 'react';
function Form1() {
    const [name, setName] = useState("");
    const [txtarea, setTextarea] = useState("The content of a textarea goes in the value attribute");
    const [myCar, setMyCar] = useState("Volvo");
        
    const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}${txtarea}${myCar}`)
    }
    return (
    <form onSubmit={handleSubmit}>
    <label>Enter your name:
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </label>
    <label>Address
    <textarea value={txtarea} onChange={(e) => setTextarea(e.target.value)} />

    </label>
    <label>Select Car
 <select value={myCar} onChange={(e)=>setMyCar(e.target.value)}>
<option value="Ford">Ford</option>
<option value="Volvo">Volvo</option>
<option value="Fiat">Fiat</option>
</select>
</label>

    <input type="submit" />
    </form>
    )}
    
export default Form1