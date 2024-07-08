import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #F8F9FA;
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    height: 20%;
  }
`;

export const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 2.5rem;
  color: #06d6a0;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const StyledSubtitle = styled.h2`
  font-size: 1.125rem;
  color: #118ab2;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const StyledDataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 0;
  }
`;

export const StyledDataBox = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;

  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {
    
  }
`;

export const StyledDataTitle = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  color: #073B4C;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const StyledDataValue = styled.h2`
  font-size: 2.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;