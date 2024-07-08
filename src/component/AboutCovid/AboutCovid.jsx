import styled from 'styled-components';
import Bacteria from '../../assets/bacteria.png';

const StyledContainer = styled.div`
  width: 100vw;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const StyledHeader = styled.div`
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-weight: 500;
  font-size: 2.5rem;
  color: #06D6A0;
`;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const StyledImage = styled.img`
  width: 15rem;
  height: 15rem;

  @media (min-width: 768px) {
    width: 20rem;
    height: 20rem;
  }
`;

const StyledTextContainer = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StyledText = styled.p`
  color: #073B4C;
  text-align: justify;
  margin-bottom: 1rem;
`;

export default function AboutCovid() {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>About Covid-19</StyledTitle>
      </StyledHeader>
      <StyledContent>
        <StyledImage src={Bacteria} alt="Bacteria" />
        <StyledTextContainer>
          <StyledText>
            COVID-19 (Coronavirus Disease 2019) adalah penyakit menular yang disebabkan oleh virus SARS-CoV-2. Penyakit ini pertama kali terdeteksi di kota Wuhan, Cina, pada akhir Desember 2019 dan dengan cepat menyebar ke seluruh dunia, menyebabkan pandemi global.
          </StyledText>
          <StyledText>
            COVID-19 menyebar melalui droplet pernapasan yang dihasilkan ketika orang yang terinfeksi batuk, bersin, atau berbicara. Virus juga dapat menyebar melalui kontak langsung dengan orang yang terinfeksi atau dengan menyentuh permukaan yang terkontaminasi dan kemudian menyentuh wajah.
          </StyledText>
          <StyledText>
            Gejala umum COVID-19 meliputi demam, batuk kering, dan kelelahan. Beberapa orang mungkin mengalami gejala yang lebih parah, seperti sesak napas atau nyeri dada, dan dalam beberapa kasus, penyakit ini dapat berakibat fatal, terutama pada individu dengan kondisi kesehatan yang mendasarinya atau usia lanjut.
          </StyledText>
        </StyledTextContainer>
      </StyledContent>
    </StyledContainer>
  );
}
