import styled from 'styled-components';

export const StyledTable = styled.table`
  border: 2px solid #d1d5db;
  width: 100%;
  border-collapse: collapse;
`;

export const StyledThead = styled.thead`
  border: 2px solid #d1d5db;
`;

export const StyledTr = styled.tr`
  border: 2px solid #d1d5db;
  color: #06D6A0;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const StyledTh = styled.th`
  padding: 0.5rem;
  border: 2px solid #d1d5db;
`;

export const StyledThNo = styled(StyledTh)`
  width: 5rem; /* lebar kolom nomor */
`;

export const StyledTbody = styled.tbody`
  border-top: 2px solid #d1d5db;
  text-align: center;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const StyledTd = styled.td`
  border: 2px solid #d1d5db;
  padding: 1rem 3rem;
  height: 3rem;

  @media (min-width: 1024px) {
    height: 3rem;
  }
`;

export const StyledTdNo = styled(StyledTd)`
  width: 5rem; /* lebar kolom nomor */
`;
