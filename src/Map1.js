function Map1() {
    const arr=[1,2,3,4,5];
    return (
    <div>
        <h1>Example of mapping</h1>
        { 
            arr.filter((value)=>
            {
               if(value===3)
               {
                 return false;
               }
               else{
                return <h2>Array Element= {value}</h2>
               }
                
            })
        }
    </div>
    )
}
export default Map1
