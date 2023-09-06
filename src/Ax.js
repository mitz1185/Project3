import axios from "axios";
import React,{useState,useEffect} from "react";

const baseURL = "https://www.boredapi.com/api/activity";

 function Ax() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios
    .get(baseURL)
    .then((response) => {
        console.log(response.data)
        setPost(response.data);
    })
    .catch((error)=>{
      console.error(error);
    });
  });

  if (!post) return null;

  return (
    <div>
     {/* <img src={post.} width="500px" height="500px"/> */}
     <h1>{post.activity}</h1>
    </div>
  );
}
export default Ax                                                                                                                                                                                                                                                                                                                                                                                                               
//https://apipheny.io/free-api/
