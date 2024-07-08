import { StyledFooterContainer, StyledLeftSection, StyledLink, StyledLinkSection, StyledSubtitle, StyledTitle } from './Footer.styled';


export default function Footer() {
  return (
    <StyledFooterContainer>
      <StyledLeftSection>
        <StyledTitle>COVID ID</StyledTitle>
        <StyledSubtitle>Developed by aufaroot18</StyledSubtitle>
      </StyledLeftSection>
      <StyledLinkSection>
        <StyledLink href="#">Global</StyledLink>
        <StyledLink href="#indonesia">Indonesia</StyledLink>
      </StyledLinkSection>
      <StyledLinkSection>
        <StyledLink href="#provinsi">Provinsi</StyledLink>
        <StyledLink href="#">About</StyledLink>
      </StyledLinkSection>
    </StyledFooterContainer>
  );
}
