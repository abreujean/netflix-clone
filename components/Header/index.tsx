import * as S from './styles'
import img from './../../public/images/logo.svg'

export default function Header() {
  return (
    <S.Container>

      <S.StyledImage src={img} alt="Logo da netflix" width={200} height={200} />

      <S.ContainerButtonSelect>
        <S.Select name="" id="">
          <option value="valor1">Português</option>
          <option value="valor2" selected>Inglês</option>
        </S.Select>
        <S.Button>Entrar</S.Button>
      </S.ContainerButtonSelect >
    </S.Container >
  )
}
