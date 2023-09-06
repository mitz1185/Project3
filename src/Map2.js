import img1 from "./image/smily.png" //import image from same folder
import img2 from "./image/smily.png" //import image from same folder
function Map2() {
    const images=[{
        id:1,
        pic:img1,
    },
    {
        id:1,
        pic:img2,
    },
];
  return (
    <div>   
        {images.map((val) => {
           return <img src={val.pic} heigth="200px" width="200px" alt="logo" />
        })}   
    </div>
  )
}
export default Map2
