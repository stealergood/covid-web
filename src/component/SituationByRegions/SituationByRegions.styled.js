import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  h1 {
    font-weight: 500;
    color: #06D6A0;
    font-size: 2.5rem;

    @media (min-width: 640px) {
      font-size: 3.75rem;
    }
  }

  span {
    font-weight: 400;
    font-size: 1.25rem;
    color: #118AB2;

    @media (min-width: 640px) {
      font-size: 1.5rem;
    }
  }
`;

export const StyledRegionsContainer = styled.div`
  width: 100%;
  padding: 40px 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  row-gap: 65px;
  justify-content: center;

  @media (min-width: 640px) {
    padding: 40px 80px;
  }
`;

export const StyledRegionCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 24px;
  padding: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 640px) {
    width: 48%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #073B4C;
    text-align: center;

    @media (min-width: 640px) {
      font-size: 1.875rem;
    }
  }

  .data-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 28px;

    .data-item {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;

      img {
        width: 40px;
        height: 40px;

        @media (min-width: 640px) {
          width: 48px;
          height: 48px;
        }
      }

      div {
        p {
          color: #64748B;
        }

        h4 {
          font-size: 1.25rem;
          color: #06D6A0;

          @media (min-width: 640px) {
            font-size: 1.5rem;
          }

          &.recovered {
            color: #118AB2;
          }

          &.deaths {
            color: #118AB2;
          }
        }
      }
    }
  }
`;