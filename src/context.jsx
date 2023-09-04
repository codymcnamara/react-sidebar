import { createContext, useContext, useState } from "react";
const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openSidebar () {
        setIsSidebarOpen(true)
    }
    function closeSidebar () {
        setIsSidebarOpen(false)
    }
    function openModal () {
        setIsModalOpen(true)
    }
    function closeModal () {
        setIsModalOpen(false)
    }

    return(
        <GlobalContext.Provider value={{isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal}}>
            {children}
        </GlobalContext.Provider>
    ) 
}

export default AppContext;