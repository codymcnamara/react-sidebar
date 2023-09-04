import { useContext } from "react";
import { useGlobalContext } from "./context";


function Home () {
    const {openSidebar, closeSidebar, openModal, closeModal} = useGlobalContext();

    return(
        <div>
            <div>Home</div>
            <button className="btn" onClick={openModal}>open modal</button>
            <button className="btn" onClick={openSidebar}>open Sidebar</button>
        </div>
    )
}
export default Home;