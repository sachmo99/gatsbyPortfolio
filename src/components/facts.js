import styled from '@emotion/styled';
import React from 'react';
import StyledSkewedSection from './skewed-section';
import { StyledH1 } from './_shared/styled-headings';

const StyledLogoSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledFactNumber = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  & > .number {
    margin-left: 2rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: bold;
  }

  & > .fact {
    position: relative;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    background-color: var(--bg-color);
    margin-left: 2rem;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: -2rem;
      width: 1rem;
      height: 2px;
      background-color: var(--primary-color);
    }
  }
`;

const Facts = () => {
  return (
    <StyledSkewedSection angle={10}>
      <StyledH1>Glimpse into my numbers</StyledH1>
      <StyledLogoSection>
        <StyledFactNumber>
          <span className="number">6</span>
          <span className="fact">Courses Completed</span>
        </StyledFactNumber>
        <StyledFactNumber>
          <span className="number">5</span>
          <span className="fact">Projects designed</span>
        </StyledFactNumber>
        <StyledFactNumber>
          <span className="number">1</span>
          <span className="fact">OpenSource Contributions</span>
        </StyledFactNumber>
        <StyledFactNumber>
          <span className="number">♾</span>
          <span className="fact">Enthusiam to build new projects</span>
        </StyledFactNumber>
      </StyledLogoSection>
    </StyledSkewedSection>
  );
};

export default Facts;
