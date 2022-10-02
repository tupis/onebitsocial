import { createContext, useState} from "react";

const ProviderContext = createContext()

const ProviderProvider = ({children}) => {
    const [ closeForm, setCloseForm ] = useState(false)

    const SwitchModal = () => {
        setCloseForm(!closeForm)
    }
    

    return (
        <ProviderContext.Provider value={{closeForm, SwitchModal}}>
            {children}
        </ProviderContext.Provider>
    )
}

export {ProviderProvider, ProviderContext};