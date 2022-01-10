import styled from 'styled-components'
import img from './../../public/images/background-hero.jpg'

export const HeroContainer = styled.div`
  background-image: url(${img.src});
  background-position: center center;
  background-size: cover;
  height: 920px ;
  filter: brightness(30%);
`