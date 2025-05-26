import Earning from "../components/Earning/Earning";
import Greeting from "../components/HomePage/Greeting/Greeting";

export default function HomePage(){
    return(
        <div>
            <Greeting  />
            <Earning />
        </div>
    );
}