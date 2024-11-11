import { useContext, createContext, useState } from "react";

const ExpandedContext = createContext()

export function ExpandedContextProvider({children}) {

    const [expanded, setExpanded] = useState(false)

    const toggleExpanded = () => {
        setExpanded(prev => !prev)
    }
    return(
        <ExpandedContext.Provider value={{expanded, toggleExpanded}}>
            {children}
        </ExpandedContext.Provider>
    )
}

export function useExpanded() {
    return useContext(ExpandedContext)
}