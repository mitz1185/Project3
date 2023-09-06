import React from 'react'
const Form2 = () => {
    const handlesubmit=(e)=>
    {
        e.preventDefault();
        if(e.target.pass.value !== e.target.cpass.value){
            alert("password and confirm password must be same");
        }
        else{
            alert("form Submitted with below data.\n First name: "+ e.target.fname.value +" Last Name : "+ e.target.lname.value +" Email: "+ e.target.email.value);
        }
    }
  return (
    <div>
        <form className="form-data" onSubmit={handlesubmit}>      
            <label>First Name:</label>
            <input type="text" name="fname" />
            
            <label>Last Name:</label>
            <input type="text" name="lname" />
        
            <label>Email ID:</label>
            <input type="email" name="email" /><br/>
        
            <label>Password :</label>
            <input type="password"  name="pass" /><br/>
        
            <label>Confirm Password :</label>
            <input type="password"  name="cpass" /><br/>
        
        <button type="submit">Submit</button> <br/>
        </form>
    </div>
  )
}
export default Form2
