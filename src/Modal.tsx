import styled from "styled-components/macro";

const AttachModal = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalDiv = styled.div`
    background-color: ${(props) => props.theme.bg};
    border-radius: 10px;
    width: 60%;
    height: 60%;
    overflow-y: auto;
    font-size: 1.5em;
`;

interface ModalProps {
    children: React.ReactNode;
    showModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ children, showModal }: ModalProps): JSX.Element {
    return (
        <AttachModal onClick={() => showModal(false)}>
            <ModalDiv>{children}</ModalDiv>
        </AttachModal>
    );
}

export default Modal;
