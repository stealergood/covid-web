import { StyledContainer, StyledHeader, StyledRegionsContainer, StyledRegionCard } from './SituationByRegions.styled';
import iconConfirmed from '../../assets/icon-confirmed.png';
import iconRecovered from '../../assets/icon-recovered.png';
import iconDeath from '../../assets/icon-death.png';

export default function SituationByRegions(props) {
  const { regionsData } = props;

  const formatNumber = (number) => {
    return number.toLocaleString('id-ID');
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <h1>Situation By Regions</h1>
        <span>Bacaan Pilihan Covid</span>
      </StyledHeader>

      <StyledRegionsContainer>
        {regionsData.map((item, index) => (
          <StyledRegionCard key={index}>
            <h2>{item.name}</h2>
            <div className="data-container">
              <div className="data-item">
                <img src={iconConfirmed} alt="confirmed" />
                <div>
                  <p>Confirmed</p>
                  <h4>{formatNumber(item.numbers.confirmed)}</h4>
                </div>
              </div>
              <div className="data-item">
                <img src={iconRecovered} alt="recovered" />
                <div>
                  <p>Recovered</p>
                  <h4 className="recovered">{formatNumber(item.numbers.recovered)}</h4>
                </div>
              </div>
              <div className="data-item">
                <img src={iconDeath} alt="deaths" />
                <div>
                  <p>Deaths</p>
                  <h4 className="deaths">{formatNumber(item.numbers.death)}</h4>
                </div>
              </div>
            </div>
          </StyledRegionCard>
        ))}
      </StyledRegionsContainer>
    </StyledContainer>
  );
}
