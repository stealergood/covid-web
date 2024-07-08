import styled from 'styled-components';

export const StyledFooterContainer = styled.div`
  width: 100%;
  height: 7.5rem;
  padding: 2rem;
  background-color: #06D6A0;
  display: flex;
  gap: 1.25rem;
  
  @media (min-width: 768px) {
    height: 9rem;
    padding: 2rem 2.75rem;
  }
`;

export const StyledLeftSection = styled.div`
  width: 57%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 768px) {
    width: 50%;
  }
  
  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  color: white;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const StyledSubtitle = styled.h2`
  color: white;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const StyledLinkSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.875rem;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    font-size: 1.25rem;
    gap: 1.25rem;
  }
  
  @media (min-width: 1024px) {
    gap: 2rem;
  }
`;

export const StyledLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;