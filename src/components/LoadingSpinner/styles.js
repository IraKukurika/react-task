import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 10;
  .spinner {
    top: 50%;
    left: 50%;
    position: absolute;
    width: 5rem;
    height: 5rem;
    transform: translate(-50%, -50%);
    animation-name: spinner-animation;
    animation-timing-function: linear;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  
  @keyframes spinner-animation {
    from {
      transform: translate(-50%, -50%) rotate(0);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export default SpinnerWrapper;