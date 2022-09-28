import styled from "styled-components/macro";

const AttachModal = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
`;

interface ModalProps {
    children: React.ReactNode;
    showModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ children, showModal }: ModalProps): JSX.Element {
    return (
        <AttachModal onClick={() => showModal(false)}>{children}</AttachModal>
    );
}

export default Modal;
