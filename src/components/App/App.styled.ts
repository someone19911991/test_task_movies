import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PageHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 2px 3px 3px silver;
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    gap: 20px;
    outline: 1px solid silver;
    background-color: #fff;
    z-index: 10;
`;

const NavItem = styled(NavLink)`
    padding: 5px;
    text-decoration: none;
`;

const MainContainer = styled.main`
    margin-top: 60px;
`;

export { NavItem, MainContainer, PageHeader };
