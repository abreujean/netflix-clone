import styled from 'styled-components'
import img from './../../public/images/background-hero.jpg'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${img.src});
  background-position: center center;
  background-size: cover;
  height: 740px ; 
  width: 100%;
  position: relative;  
  
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

export const HeroContainer = styled.div`
  padding-top: 3rem !important; 
  width: 950px;
  margin: 0 auto;  
  padding: 0 2rem;  
  text-align: center;  
`

export const Title = styled.h1`
  color: #FFF;
  font-family: ${props => props.theme.font.netflix};
  font-weight: 700;
  font-size: 4rem;
  position: relative;
  z-index: 1;
`

export const Subtitle = styled.p`
  color: #FFF;
  font-family: ${props => props.theme.font.netflix};
  font-weight: 700;
  font-size: 26px;
  position: relative;
  z-index: 1;
  padding: 1rem 0 ;
`

export const ContainerSelect = styled.div`
  display: flex;
  justify-content: center;
`

export const Label = styled.p`  
  color: #FFF;
  font-size: 1.4rem;
  position: relative;
  z-index: 1; 
  padding-bottom: 2rem ;
`
export const Select = styled.select`
  color: #FFF;
  font-size: 2rem;
  position: relative;
  z-index: 1;
  width: 500px;
  height: 70px;
`

export const Button = styled.button`  
  color: #FFF;
  border: none;
  background-color: ${props => props.theme.colors.red};
  font-family: ${props => props.theme.font.netflix};
  font-size: 2rem;
  position: relative;
  z-index: 1;
  width: 210px;
  height: 70px;
`

