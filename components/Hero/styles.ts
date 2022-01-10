import styled from 'styled-components'
import img from './../../public/images/background-hero.jpg'

export const Container = styled.div`
  background-image: url(${img.src});
  background-position: center center;
  background-size: cover;
  height: 920px ; 
  width: 100%;
  position: absolute;  
  
  :after {
    position: absolute;
    content:"";
    height:100%;
    width:100%;
    top:0;
    left:0;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,10%) 50%, rgba(0,0,0,1) 100%);
}
`

export const Teste = styled.div`
  background: #000;
  height: 920px ;
  z-index: 1;  

`

export const HeroContainer = styled.div`
  width: 950px;
  margin: 0 auto;
`

export const Title = styled.h1`

`

export const Subtitle = styled.p`
`