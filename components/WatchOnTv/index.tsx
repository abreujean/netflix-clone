import Image from 'next/image'
import img from './../../public/images/tv.png'
import * as S from './styles'

export default function WhatchOnTv() {
  return (
    <>
      <S.Wraper>
        <S.Container>
          <S.BoxText>
            <S.Title>Aproveite na TV.</S.Title>
            <S.Subtitle>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</S.Subtitle>
          </S.BoxText>
          <S.BoxAnimation>
            <S.BoxImage>
              <Image src={img} alt="tv" />
            </S.BoxImage>
            <S.BoxVideo>
              <video autoPlay playsInline muted loop src="videos/video-tv-0819.m4v" style={{ width: "363px", paddingBottom: "15px" }} />
            </S.BoxVideo>
          </S.BoxAnimation>
        </S.Container>
      </S.Wraper>
    </>
  )
}
