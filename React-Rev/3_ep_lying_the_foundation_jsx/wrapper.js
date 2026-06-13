const background = 'https://images.unsplash.com/photo-1614850523011-8f49ffc73908?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


import Card from "./card";
import Loader from "./Loader";

const Wrapper = function(props){
    const {userDataJson} = props
    console.log(props)
    return (
        <div id="wrapper" style={wrapperStyle}>
            <div style={gridContainerStyles}>
                {userDataJson.length !== 0 ? 
                userDataJson.map((userdata,index)=><Card key={index+"a"} userData={userdata}/>)
                :<Loader/>
                }
                
            </div>
        </div>
    )
}

const wrapperStyle = {
  // 1. Change width and height parameters
  width: '100%',
  minHeight: '100vh', // Allows the container to expand past the screen size

  // 2. CHANGE THIS: Switch 'fixed' to 'relative'
  position: 'relative', 
  
  // 3. REMOVE THIS: zIndex is no longer needed since it's the main container
  // zIndex: -1, 

  // 4. Keep your image settings exactly as they were
  backgroundImage: `url('${background}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  
  // 5. ADD THIS: Makes the background image stay locked while content scrolls
  backgroundAttachment: 'fixed', 
};

const gridContainerStyles = {
  display: 'grid',
  // 1. Auto-adjust layout based on screen width
  // '380px' matches the width of your glassmorphism card
  gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
  
  // 2. Control spacing between the cards
  gap: '2rem',
  
  // 3. Sizing and centering layout parameters
  width: '100%',
  maxWidth: '1200px', // Prevents the grid from getting too wide on huge monitors
  margin: '0 auto',   // Centers the grid container on the webpage
  padding: '2rem',
  
  // 4. Ensure it layout fixes box sizing issues
  boxSizing: 'border-box',
};




export default Wrapper;