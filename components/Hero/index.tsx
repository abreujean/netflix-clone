import * as S from './styles'

export default function Hero() {
  return (
    <>
      <S.Container>
        <S.HeroContainer>
          <S.Title>Filmes, séries e muito mais. Sem limites.</S.Title>
          <S.Subtitle>Assista onde quiser. Cancele quando quiser.</S.Subtitle>
          <S.Label>
            Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.
          </S.Label>
          <S.ContainerSelect>
            <S.Select />
            <S.Button>
              Vamos lá
            </S.Button>
          </S.ContainerSelect>
        </S.HeroContainer>
      </S.Container>
    </>
  )
}
