const mg=require("mongoose")
const v=require("validator")
mg.connect("mongodb://127.0.0.1:27017/ankita").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});
//mg.pluralize(null)
const mySchema=new mg.Schema(
    {
        name:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
            minlength:[3,"Min length must be 3"],
            maxlength:[7,"max length must be 7"],
            enum:["abc","xyz","def"]
        },
        age:{
            type:Number,
            validate(v1){
                if(v1<=0)
                {
                    let k=new Error("Age must be positive");
                    throw k;
                }
            }
        },
        email:{
            type:String,
            validate(val)
            {
                if(!v.isEmail(val))
                {
                    throw new Error("Enter valid email_id")
                }
            }
        }

    }
);
const person=new mg.model("person",mySchema)
const createDoc=async()=>
    {
     //   try{
        const personData=new person(
            {
                name:"def",
                Surname:"tiwari",
                age:31, //age:-33,
                active:true,
                email:"abc@gmail.com"
            }
        )
        const personData1=new person(
            {
                name:"xyz",
                Surname:"sharma",
                age:32, //age:-33,
                active:true,
                email:"xyz@gmail.com"
            }
        )
        //const result=await personData.save(); //for single data record
        const result= await person.insertMany([personData,personData1])
        console.log(result)
     //   }
       //     catch(err)
            // {
            //     console.log("problem");
            // }
    }
createDoc();