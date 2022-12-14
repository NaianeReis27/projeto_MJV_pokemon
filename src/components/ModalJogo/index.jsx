import {  useRef } from "react"
import { Container } from "./styles"

export const Modal = ({children}) => {
    const modalRef = useRef();
  

    return(
        <Container >
            <div ref={modalRef} className="modal-box">
                {children}



            </div>
        </Container>
    )

}

export default Modal;