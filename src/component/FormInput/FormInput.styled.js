import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 16rem;

  @media (min-width: 768px) {
    gap: 1.25rem;
    width: 19.375rem;
  }
  
  @media (min-width: 1024px) {
    gap: 0.75rem;
    width: 16rem;
  }
`;

export const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const StyledLabel = styled.label`
  color: #06D6A0;
  font-size: 1.25rem;

  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid #28a745;
  outline: none;
  border-radius: 0.375rem;
  padding: 0.25rem;

  &:focus {
    outline: 1px solid #28a745;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 3rem;
  margin-top: 1.25rem;
  background-color: #06D6A0;
  color: white;
  border: none;
  border-radius: 0.5rem;

  &:hover {
    background-color: #38c172;
  }
`;