import {useGlobalContext} from './context'

function Modal () {
    const {closeModal} = useGlobalContext();

    return(
        <>
            <div>Hi, I'm a modal. I like turtles!</div>
            <button onClick={closeModal}>Close modal</button>
        </>
    )
}
export default Modal;