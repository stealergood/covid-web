import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 16px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 12px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 50%;
    margin-top: 6px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2.5rem;
  color: #06D6A0;

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.h2`
  margin-top: 0.5rem;
  font-size: 1.125rem;
  color: #118ab2;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Description = styled.p`
  margin-top: 2rem;
  font-size: 1.125rem;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    margin-top: 3rem;
  }

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const Button = styled.button`
  width: 13rem;
  height: 4rem;
  margin-top: 3rem;
  background-color: #06D6A0;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;

  &:hover {
    background-color: #4fd1c5;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    height: fit-content;
  }

  @media (min-width: 1024px) {
    width: 50%;
    margin-top: 6px;
  }
`;