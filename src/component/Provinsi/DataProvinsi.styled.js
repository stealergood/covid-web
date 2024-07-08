import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  padding-top: 25px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 1024px) {
    padding-top: 10px;
    gap: 20px;
  }
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  @media (min-width: 1024px) {
    gap: 2px;
  }
`;

export const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 2.5rem;
  color: #06D6A0; /* Replace with your primary green color */

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const StyledSubtitle = styled.h2`
  font-size: 1.125rem;
  color: #118AB2;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const StyledTableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;