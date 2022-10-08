import styled from "styled-components";

export const NavWrapper = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 100;

  &.nav__black {
    background-color: #111;
  }

  /* Transitions */
  transition: all 0.5s ease-in;

  .nav__contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav__avatar {
    padding-right: 1.5rem;
    cursor: pointer;
  }

  .nav__logo {
    padding-left: 1.5rem;
  }
`;
