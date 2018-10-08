import styled from 'styled-components';

export const AppMenu = styled.div`
  width: 100%;
  .menu {
    text-align: center;
    text-shadow: 0 0 5px #ffffff;
    
    ul {
      padding: 0;
      list-style: none;
      margin: 0;
      justify-content: center;
    }
    .link {
      border-radius: 3px;
      text-align: center;
      width: 100%;
      border: 1px solid #000000;
      padding: 0 0.5rem;
      line-height: 2;
      box-sizing: border-box;
      background-color: rgba(255, 255, 255, 0.8);
      color: currentColor;
      text-decoration: none;
      display: block;
      margin: 0.25rem 0;
      font-size: 1em;
      
      &[disabled] {
        pointer-events: none;
        opacity: 0.5;
      }
    }
  }
  .menu, .menu ul {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      width: 100%;
  }
`;
