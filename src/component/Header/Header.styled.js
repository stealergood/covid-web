import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #06D6A0;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    height: 5rem;
  }

  @media (min-width: 1024px) {
    height: 7rem;
  }
`;

export const StyledLeftSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  margin-left: 1.75rem;
  font-weight: 600;
  color: white;
  font-size: 1rem;

  @media (min-width: 768px) {
    margin-left: 5rem;
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    margin-left: 5rem;
    font-size: 1.875rem;
  }
`;

export const StyledRightSection = styled.div`
  width: 50%;
  height: 100%;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 0.75rem;

  @media (min-width: 768px) {
    gap: 2rem;
    font-size: 1.125rem;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
    font-size: 1.25rem;
  }
`;

export const StyledLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;