import styled from "styled-components/macro";
import Navbar from "./Navbar";

const Head = styled.header`
    width: 98vw;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    padding: 0 20px;
    background-color: ${(props) => props.theme.bg};
`;

const H1 = styled.h1`
    grid-area: heading;
    height: 100%;
    width: 30%;
    margin: 0;
    padding: 10px;
    text-align: center;
    font-size: 1.8em;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

const Span = styled.span`
    font-size: 0.7em;
    text-transform: none;
    letter-spacing: unset;
`;

const Logo = styled.div`
    grid-area: logo;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Img = styled.img`
    height: 100px;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.9));
`;

interface HeaderProps {
    ThemeButton: React.FC;
}

function Header({ ThemeButton }: HeaderProps): JSX.Element {
    return (
        <Head>
            <Logo>
                <Img src="./Logo.png" alt="A Song of Ice and Fire logo" />
            </Logo>
            <H1>
                Call the banners <br />
                <Span>A Song of Ice and Fire TMG army builder</Span>
            </H1>
            <Navbar />
            <ThemeButton />
        </Head>
    );
}

export default Header;
