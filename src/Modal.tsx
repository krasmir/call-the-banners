import styled from "styled-components/macro";
import { Button } from "./Button";

const AttachModal = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
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
    position: relative;
    border-radius: 10px;
    width: 60%;
    height: 100%;
    overflow-y: auto;
    z-index: 12;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: initial;
`;

const CloseModalButton = styled(Button)`
    margin: 0;
    position: absolute;
    top: 20px;
    right: 20px;
`;

interface ModalProps {
    children: React.ReactNode;
    showModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ children, showModal }: ModalProps): JSX.Element {
    return (
        <AttachModal onClick={() => showModal(false)}>
            <ModalDiv onClick={(e) => e.stopPropagation()}>
                <CloseModalButton onClick={() => showModal(false)}>
                    X
                </CloseModalButton>
                {children}
            </ModalDiv>
        </AttachModal>
    );
}

export default Modal;
