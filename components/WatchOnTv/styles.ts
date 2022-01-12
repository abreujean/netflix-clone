import styled from 'styled-components'

export const Wraper = styled.div`
  background-color: ${props => props.theme.colors.black};
  border-top: 8px solid ${props => props.theme.colors.body};
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 1150px;
  margin: 0 auto;  
`
export const BoxText = styled.div`
  width: 50%;
  flex-grow: 1;
`


export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.font.netflix};
  font-weight: 800;
  font-size: 50px;
  margin-bottom: 1rem;
`

export const Subtitle = styled.p`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.font.netflix};
  font-weight: 600;
  font-size: 26px;
`

export const BoxAnimation = styled.div`
  width: 50%;
  flex-grow: 1;
`

export const BoxVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
`

export const BoxImage = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
`


