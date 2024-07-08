import DataTable from '../Table/DataTable';
import { StyledContainer, StyledHeader, StyledSubtitle, StyledTableContainer, StyledTitle } from './DataProvinsi.styled';

export default function DataProvinsi(props) {
  const { data } = props;
  
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>Provinsi</StyledTitle>
        <StyledSubtitle>Data Covid Berdasarkan Indonesia</StyledSubtitle>
      </StyledHeader>
      <StyledTableContainer>
        <DataTable data={data}/>
      </StyledTableContainer>
    </StyledContainer>
  );
}
