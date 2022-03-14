import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6.5rem;
`;

interface ISummaryItem {
  highlightBackground?: boolean;
}

export const SummaryItem = styled.div<ISummaryItem>`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-color);

  ${(props) =>
    props.highlightBackground &&
    css`
      background: var(--green);
      color: #fff;
    `}

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`;
