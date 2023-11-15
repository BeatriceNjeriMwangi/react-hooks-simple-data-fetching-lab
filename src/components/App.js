// create your App component here
import react ,{useState, useEffect} from "react";
import ReactDOM from "react-dom";

function App(){

    const [image ,setImage]=useState("");
    const [isloading, setisloading] = useState(true)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then(data=>{
            setImage(data)
            setisloading(false)
        })
        
    },[])
        return(
        <div>
           {isloading ? <p>Loading...</p>:null}
            <img src={image.message} alt="A Random Dog"/>
        </div>
    )

}
export default App




