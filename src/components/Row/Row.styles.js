import styled from "styled-components";
import { pxToRem } from "../../utils/utils";

export const RowWrapper = styled.div`
  img {
    max-width: 100%;
  }

  color: white;
  margin-left: ${pxToRem(20)};

  .row__posters {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: ${pxToRem(20)};

    &::webkit-scrollbar {
      display: none;
    }
  }

  .row__poster {
    height: ${pxToRem(100)};
    object-fit: contain;
    margin-right: 10px;
    transition: transform 450ms;
    &:hover {
      transform: scale(1.08);
      opacity: 1;
    }
  }

  .row__poster__large {
    height: 250px;
    &:hover {
      transform: scale(1.09);
      opacity: 1;
    }
  }
`;
