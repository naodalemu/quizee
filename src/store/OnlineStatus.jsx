import { createContext, useState, useEffect, useContext } from "react";

const OnlineStatusContext = createContext();

export function useOnlineStatus() {
    return useContext(OnlineStatusContext);
}

export function OnlineStatusProvider(props) {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        function handleOnline() {
            // Trying to manage error from couldn't fetch after it gets online.
            // The online variable turns true faster than the fetch module can handle fetches.
            // (Comment writen by me not GPT :) )
            setTimeout(() => {
                setIsOnline(true);
            }, 1000);
        }

        function handleOffline() {
            setIsOnline(false)
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Clean up event listeners on unmount
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, [])

    return (
        <OnlineStatusContext.Provider value={isOnline}>
            {props.children}
        </OnlineStatusContext.Provider>
    )
}