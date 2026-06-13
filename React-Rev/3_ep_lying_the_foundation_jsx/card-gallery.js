//extracting data from api
import ReactDOM from 'react-dom/client'
import Wrapper from './wrapper';

const root = ReactDOM.createRoot(document.getElementById('root'))
 Object.assign(document.body.style,{
    margin: "0px",
    padding: "0px",
    boxSizing: "border-box"
 })
const randomUserAPI = 'https://randomuser.me/api/?results='
let userDataJson = [];


// fetch(randomUserAPI)
// .then(result => result.json())
// .then(data => {
//     userDataJson = data.results
//     root.render(<Wrapper userDataJson={userDataJson}/>)
// })

async function getRandomUser(noOfUsers,url) {

    const response = await fetch(`${url}+${noOfUsers}`);
    const data = await response.json();
    userDataJson = data.results;
    const testing = {"test_1" : "value_1","test_2":"value_2"}
    root.render(<Wrapper userDataJson={userDataJson} {...testing} />); //if you say raw={raw} that mean is props = {raw:raw}
    
}

getRandomUser(20,randomUserAPI)

root.render(<Wrapper userDataJson={userDataJson}/>)




