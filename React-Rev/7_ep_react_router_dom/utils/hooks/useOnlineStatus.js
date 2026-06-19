import { useEffect, useState } from "react"
const useOnlineStatus = () => {

    //state
    const [isOnline, setIsOnline] = useState(navigator.onLine)
    //effect
    useEffect(() => {

        // maine anonymous funciton nhi diya kyonki unhe remove bhi to karna tha 
        const setStatusOnline = () =>OnlineStatus
        const setStatusOffline = () => setIsOnline(false)

        window.addEventListener('online', setStatusOnline)
        window.addEventListener('offline', setStatusOffline)
        //cleanup
        return () => {
            // yaha maine unhe remove kar diya
            window.removeEventListener('online',setStatusOnline)
            window.removeEventListener('offline',setStatusOffline)
        }
    }, [])
    return isOnline
}

export default useOnlineStatus