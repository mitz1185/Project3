import React ,{useState} from 'react'

const Showhide = () => {

    const [show,setShow]=useState(false);
    const[bt,setBt]=useState("Click here");
    const[txt,setTxt]=useState("");
    function sh()
    {
        setShow(!show);
        if(show===false)
        {
            setBt("Hide")
            setTxt("Hello")
        }
        else{
            setBt("Clickhere")
            setTxt("")
        }
    }
  return (
    <div>
      <button onClick={sh}>{bt}</button>{txt}
    </div>
  )
}

export default Showhide
