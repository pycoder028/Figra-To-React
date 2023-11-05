import React from 'react'
import heroImg from "../../images/right.png"
import { Container } from '../../Styles/Common.styled'
import { HereSection } from '../../Styles/Home.styled'

export default function Hero() {
  return (
    <Container>

      <HereSection>
        <div>
          <h2>Learn <span>REACT</span> from <span>callBackMind</span></h2>
        </div>
        <div>
          <img src={heroImg} alt="hero img" />
        </div>
      </HereSection>
    </Container>
  )
}
