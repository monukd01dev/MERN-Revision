
import ReactDOM from "react-dom/client"
import Wrapper from "./wrapper"
import { Fragment } from "react/jsx-runtime"
const rootjs = document.getElementById('root')

const root = ReactDOM.createRoot(rootjs)



const mydata = {
    name : "majon",
    haveAdhaar : true,
    isIndian : false,
    realName : "MD Kasim"
}

const MyComponents = (props) =>{
    console.log(props)
    return (
        <Fragment>
             i am just a bare text fragments will not show on the html
        </Fragment>
    )
}
console.log(<MyComponents {...mydata} mydata={mydata}/>)


root.render(<MyComponents {...mydata}/>)