import styled from 'styled-components';
import ImgBg from '../../../dist/tint-shades.jpeg';

export const FilmContainer = styled.div`
  text-align: center;
  background-image: url(${ImgBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 70%;
  overflow: hidden;
  margin-bottom: 25px;

  @media only screen and (max-width:500px) {
    background-image: none;
  }
`;