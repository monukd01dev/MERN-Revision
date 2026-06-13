const jsdiv = document.createElement('div')
const jshead = document.createElement('h1')
const jsmessage = document.createTextNode('Hellow from js bitch')

jshead.append(jsmessage)
jsdiv.append(jshead)
document.body.firstElementChild.after(jsdiv)
// console.log(document.body.firstChild)
const root = document.getElementById("root")
root.style.border = "2px solid black"

//react code below
console.log(React,ReactDOM)

const reacth1 = React.createElement('h1',{id:"react-heading",style:{color:"red"}},"I'm the react code ")

const nestedElement = React.createElement('div',{id: "parent",style:{border: "2px solid red",}},
    React.createElement('div',{id:"child",style:{border:"2px solid black",borderRadius:"1rem"}},
        [React.createElement('h1',{id:"heading",style:{color:"red"}},"kya be english medium"),
         React.createElement('h1',{id:"heading-2",style:{color:"blue"}},"kya be hindi medium")
        ]
    )
)

ReactDOM.createRoot(root).render(nestedElement)
