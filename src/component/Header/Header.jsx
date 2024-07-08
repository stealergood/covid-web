import { StyledHeaderContainer, StyledLeftSection, StyledLink, StyledRightSection, StyledTitle } from "./Header.styled";

export default function Header() {
  return (
    <StyledHeaderContainer>
      <StyledLeftSection>
        <StyledTitle>COVID ID</StyledTitle>
      </StyledLeftSection>
      <StyledRightSection>
        <StyledLink href="/">Global</StyledLink>
        <StyledLink href="/indonesia">Indonesia</StyledLink>
        <StyledLink href="/provinsi">Provinsi</StyledLink>
        <StyledLink href="/about">About</StyledLink>
      </StyledRightSection>
    </StyledHeaderContainer>
  );
}
