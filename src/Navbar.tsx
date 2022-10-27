import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
    height: 100%;
    width: 60%;
    background-color: ${(props) => props.theme.bg};
`;

const Ul = styled.ul`
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Li = styled.li`
    list-style: none;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    &.active {
        color: red;
    }
`;

function Navbar(): JSX.Element {
    return (
        <Nav>
            <Ul>
                <Li>
                    <StyledNavLink to="/" end>
                        Home
                    </StyledNavLink>
                </Li>

                <Li>
                    <StyledNavLink to="armybuilder">Army Builder</StyledNavLink>
                </Li>
                <Li>
                    <StyledNavLink to="units">Units</StyledNavLink>
                </Li>
                <Li>
                    <StyledNavLink to="attachments">Attachments</StyledNavLink>
                </Li>
                <Li>
                    <StyledNavLink to="tactics">Tactics Cards</StyledNavLink>
                </Li>

                <Li>
                    <StyledNavLink to="about">About</StyledNavLink>
                </Li>
            </Ul>
        </Nav>
    );
}
export default Navbar;
