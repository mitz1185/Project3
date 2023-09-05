const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/Aashi").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});
//mg.pluralize(null)
const mySchema=new mg.Schema(
    {
        name:{
            type:String,
            required:true
        },
        Surname:String,
        age:Number,
        agee:Number,
        active:Boolean,
        date:{
            type:Date,
            default:new Date()
        }
    }
);
const person=new mg.model("a1",mySchema)
const updateDoc=async(i) =>
{
    const result=await person.updateOne({_id:i},
    {
        $set:{agee:37}
    },{new:true})
    // const result=await person.findByIdAndUpdate({_id:i},
    //     {
    //         $set:{age:37}
    //     },
    //     {new:true})
        // const result=await person.findByIdAndUpdate({_id:i},
        //     {
        //         $set:{age:27}
        //     },{new:true})
    console.log(result)
}  
updateDoc("64ddc0aec33858b23dadb524");
// const mg=require("mongoose")
// mg.connect("mongodb://127.0.0.1:27017/zarana1").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});
// //mg.pluralize(null)
// const mySchema=new mg.Schema(
//     {
//         name:{
//             type:String,
//             required:true
//         },
//         Surname:String,
//         age:Number,
//         active:Boolean,
//         date:{
//             type:Date,
//             default:new Date()
//         }
//     }
// );
// const person=new mg.model("person",mySchema)
const deleteDoc=async(_id) =>
{
    
        const result=await person.findByIdAndDelete({_id})
            
    console.log(result)
}  
deleteDoc("64a7cd53376fc04b3c2637bd");

