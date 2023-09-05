const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/Aashi").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});
//mg.pluralize(null)
const mySchema=new mg.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:Number,
        standard:Number,
        Percentage:Number,
        active:Boolean,
        date:{
            type:Date,
            default:new Date()
        }
    }
);
const person=new mg.model("A2",mySchema)
const createDoc=async()=>
    {
        try{
        const personData=new person(
            {
                name:"ankita",
                standard:11,
                age:17,
                Percentage:75,
                active:true
            }
        )
        const personData1=new person(
            {
                name:"Nidhi",
                standard:12,
                age:19,
                Percentage:75,
                active:true
            }
        )
            const personData2=new person(
                {
                    name:"Priyanka",
                    standard:2,
                    age:6,
                    Percentage:90,
                    active:true
                }
            )
            
         // const result= await person.insertMany([personData,personData1,personData2])
        // const result= await person.find({age:{$gt:17}})
        //const result= await person.updateMany({},{$inc:{standard:1}});
       // const result=await person.find({},{name:1}).sort({age:-1}).limit(1)
        const result=await person.deleteMany({standard:3})
          // const result= await person.find({name:"ankita"})
        //const result= await person.find({name:"ankita"},{date:1,_id:0})
        //const result= await person.find({name:"zarana"}).limit(1)
       // const result= await person.find({name:"Foram"}).select({name:1}).limit(1)
      // const result= await person.findOne({name:"ankita"}).select({Surname:1})
     // const result= await person.find({age:{$gt:28}},{name:1,_id:0})
     //const result= await person.find({name:{$in:["ABC","XYZ"]}})
     //const result= await person.find({age:{$gt:0,$lt:28}})
    // const result=await person.deleteMany({Surname:"tiwari"})
     
    // const result=await person.find({age:{$lte:28}}).sort({name:-1}).count()


            console.log(result)
        }
            catch(err)
            {
                console.log("problem");
            }
    }
createDoc();