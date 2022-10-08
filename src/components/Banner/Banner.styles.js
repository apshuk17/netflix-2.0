import styled from "styled-components";
import { TMDB_IMAGE_URL_PREFIX } from "../../constants";
import { pxToRem } from "../../utils/utils";

export const BannerWrapper = styled.div`
  background-position: center;
  background-size: cover;
  height: ${pxToRem(480)};
  color: #fff;
  background-image: ${({backdropPath}) => backdropPath ? `url(${TMDB_IMAGE_URL_PREFIX}${backdropPath})` : `linear-gradient(to bottom, #111, #000)`};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .banner__contents {
    margin-left: ${pxToRem(30)};
    padding-top: ${pxToRem(140)};
    height: ${pxToRem(190)};
  }

  .banner__title {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }

  .banner__description {
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: ${pxToRem(360)};
    height: ${pxToRem(80)};
  }

  .banner--fadeBottom {
    height: 7.4rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.61),
      #111
    );
  }

  .banner__button {
    cursor: pointer;
    outline: none;
    border: none;
    color: #fff;
    font-weight: 700;
    border-radius: 0.2vw;
    padding: 0.5rem 2rem;
    margin-right: 1rem;
    background-color: rgba(51, 51, 51, 0.5);
    transition: all 0.2s;

    &:hover {
        color: #000;
        background-color: #e6e6e6;
    }
  }
`;
