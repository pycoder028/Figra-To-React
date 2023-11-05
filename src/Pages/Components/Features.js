import React from 'react'
import { FeatureCard, FeatureSection } from '../../Styles/Home.styled'
import { Container, GridThree } from '../../Styles/Common.styled'
import bootstrap from "../../images/bootstrap.png"
import tailwind from "../../images/tailwind.png"
import materialUI from "../../images/materialUI.png"

const data = [
  {
    id: 1,
    name: "Bootstrap",
    img: bootstrap,
    bgColor: "rgba(109, 67, 161, 0.3)",
    color: "rgba(109, 67, 161, 1)"
  },
  {
    id: 2,
    name: "Material Ui",
    img: materialUI,
    bgColor: "rgba(61, 128, 247, 0.3)",
    color: "rgba(61, 128, 247, 1)"
  },
  {
    id: 3,
    name: "Tailwind",
    img: tailwind,
    bgColor: "rgba(66, 166, 178, 0.3)",
    color: "rgba(66, 166, 178, 1)"
  },
]

export default function Features() {
  return (
    <FeatureSection>
      <Container>
        <h2>Others well known styling framework </h2>
        <GridThree gap="5rem">
          {
            data.map(feature => (
              <FeatureCard bgColor={feature.bgColor} color={feature.color} >
                <img src={feature.img} alt="botstrap" />
                <div className='caption'>
                  <p>{feature.name}</p>
                </div>
              </FeatureCard>
            ))
          }

        </GridThree>
      </Container>
    </FeatureSection>
  )
}
