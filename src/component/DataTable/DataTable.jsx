import { StyledTable, StyledTbody, StyledTd, StyledTh, StyledThead, StyledTr, StyledThNo, StyledTdNo } from './DataTable.styled';

export default function DataTable(props) {
  const { data } = props;

  const formatNumber = (number) => {
    return number.toLocaleString('id-ID');
  };

  return (
    <StyledTable>
      <StyledThead>
        <StyledTr>
          <StyledThNo>No</StyledThNo>
          <StyledTh>Provinsi</StyledTh>
          <StyledTh>Positif</StyledTh>
          <StyledTh>Sembuh</StyledTh>
          <StyledTh>Dirawat</StyledTh>
          <StyledTh>Meninggal</StyledTh>
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        {data.map((item, index) => (
          <StyledTr key={index}>
            <StyledTdNo>{index + 1}</StyledTdNo>
            <StyledTd>{item.name}</StyledTd>
            <StyledTd>{formatNumber(item.numbers.confirmed)}</StyledTd>
            <StyledTd>{formatNumber(item.numbers.recovered)}</StyledTd>
            <StyledTd>{formatNumber(item.numbers.treatment)}</StyledTd>
            <StyledTd>{formatNumber(item.numbers.death)}</StyledTd>
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
}
