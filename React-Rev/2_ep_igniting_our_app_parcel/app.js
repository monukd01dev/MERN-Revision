import React from "react"
import ReactDOM from "react-dom/client"

const rootjs = document.getElementById('root')

const root = ReactDOM.createRoot(rootjs)

const message = React.createElement('h1',{},"This episode is only related to parcel and npm and project setup so this contain less files")

root.render(message)