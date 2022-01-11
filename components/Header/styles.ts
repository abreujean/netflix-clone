import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
display: flex;
position: absolute;
max-width: 1960px;
width: 100%;
justify-content: space-between;
align-items: center;
padding: 3.5rem 4rem;
height: 56px;
z-index: 1;
`

export const StyledImage = styled(Image)`
  align-self: flex-start;
`

export const ContainerButtonSelect = styled.div`
  display: flex;
  align-items: center ;
`

export const Select = styled.select`
    background: #00000090;
    color: ${props => props.theme.colors.white};   
    border: 1px solid #FFF;
    padding: 8px 9px;
    font-size: 1rem;
    border-radius: 1px;
    margin-right: 2rem;

`

export const Button = styled.button`
  background: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  border: none;
  font-family: ${props => props.theme.font.netflix};
  font-weight: 400;
  border-radius: 4px;
  padding: 4px 17px;
  font-size: 1rem;

`