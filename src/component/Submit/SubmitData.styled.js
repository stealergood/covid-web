import styled from "styled-components";
import FormImage from "../../assets/svg_jsx/formimage";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #F8F9FA;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const StyledImageWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 1024px) {
    width: 83.33%;
    height: 100%;
  }
`;

export const StyledImage = styled(FormImage)`
  width: 20rem;
  height: 20rem;
  
  @media (min-width: 768px) {
    width: 450px;
    height: 450px;
  }
  
  @media (min-width: 1024px) {
    width: 580px;
    height: 580px;
  }
`;

export const StyledFormWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  
  @media (min-width: 768px) {
    gap: 2.5rem;
  }
  
  @media (min-width: 1024px) {
    width: 33.33%;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  color: #06D6A0;
  
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 3.125rem;
  }
`;