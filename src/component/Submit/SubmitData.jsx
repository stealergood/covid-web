import { StyledContainer, StyledFormWrapper, StyledImage, StyledImageWrapper, StyledTitle } from "./SubmitData.styled";
import FormInput from "../FormInput/FormInput";

export default function DataSubmit() {
  return (
    <StyledContainer>
      <StyledImageWrapper>
        <StyledImage />
      </StyledImageWrapper>
      <StyledFormWrapper>
        <StyledTitle>Form Covid</StyledTitle>
        <FormInput />
      </StyledFormWrapper>
    </StyledContainer>
  );
}
