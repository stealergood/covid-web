import { StyledContainer, StyledDataBox, StyledDataContainer, StyledDataTitle, StyledDataValue, StyledHeader, StyledSubtitle, StyledTitle } from "./Situation.styled";

export default function Situation(props) {
  const { data } = props;

  const getColor = (key) => {
    switch (key) {
      case 'confirmed':
        return "#06d6a0";
      case 'recovered':
        return "#118AB2";
      case 'death':
        return "#EF476F";
      default:
        return "black";
    }
  };

  const formatNumber = (number) => {
    return number.toLocaleString('id-ID');
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>{props.title} Situation</StyledTitle>
        <StyledSubtitle>Data Covid Berdasarkan {props.title}</StyledSubtitle>
      </StyledHeader>
      <StyledDataContainer>
        {data.map((item, index) => (
          <StyledDataBox key={index}>
            <StyledDataTitle>{item.status}</StyledDataTitle>
            <StyledDataValue style={{ color: getColor(item.status) }}>{formatNumber(item.total)}</StyledDataValue>
          </StyledDataBox>
        ))}
      </StyledDataContainer>
    </StyledContainer>
  );
}
