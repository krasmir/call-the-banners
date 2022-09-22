import styled from "styled-components/macro";

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 20px;
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.colors.main};
`;
interface LayoutProps {
    children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
    return <Div>{children}</Div>;
}
