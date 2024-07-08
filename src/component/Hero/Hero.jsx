import HeroImage from '../../assets/svg_jsx/heroimage';
import { HeroContainer, TextContainer, Title, Subtitle, Description, Button, ImageContainer } from './Hero.styled';


export default function Hero() {
  return (
    <HeroContainer>
      <TextContainer>
        <Title>Covid ID</Title>
        <Subtitle>Monitoring Perkembangan Covid</Subtitle>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since.
        </Description>
        <Button>Vaccine</Button>
      </TextContainer>
      <ImageContainer>
        <HeroImage className="max-w-full md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[400px]" />
      </ImageContainer>
    </HeroContainer>
  );
}
