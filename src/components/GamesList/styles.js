import styled from 'styled-components';

export const GameListWrap = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .wrapper {
    padding: 0.5rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-decoration: none;
    color: inherit;
  }
  .wrapper > *:not(:first-child) {
    font-size: 0.75rem;
  }
  li:not(:last-child) {
    border-bottom: 1px solid #000;
  }
  .name,
  .saved-on {
    flex-basis: 100%;
  }
`;

export default GameListWrap;