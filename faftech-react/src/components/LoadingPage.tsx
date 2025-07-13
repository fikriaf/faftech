import { div } from 'framer-motion/client';
import React from 'react';
import styled from 'styled-components';

type LoaderProps = {
  text?: string;
};

const Loader: React.FC<LoaderProps> = ({ text = "" }) => {
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white">
      <div className="d-flex flex-column align-items-center text-center">
        <StyledWrapper>
          <div className="honeycomb">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </StyledWrapper>
        {text && <div className="text-dark mt-5">{text}</div>}
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;

  @-webkit-keyframes honeycomb {
    0%, 20%, 80%, 100% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    30%, 70% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes honeycomb {
    0%, 20%, 80%, 100% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    30%, 70% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  .honeycomb {
    height: 24px;
    position: relative;
    width: 56px;
    margin: 0 auto;
  }

  .honeycomb div {
    animation: honeycomb 2.1s infinite backwards;
    background: #242424ff;
    height: 12px;
    margin-top: 6px;
    position: absolute;
    width: 24px;
  }

  .honeycomb div:after,
  .honeycomb div:before {
    content: '';
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    position: absolute;
    left: 0;
    right: 0;
  }

  .honeycomb div:after {
    top: -5px;
    border-bottom: 6px solid #242424ff;
  }

  .honeycomb div:before {
    bottom: -5px;
    border-top: 6px solid #242424ff;
  }

  .honeycomb div:nth-child(1) {
    animation-delay: 0s;
    left: -28px;
    top: 0;
  }

  .honeycomb div:nth-child(2) {
    animation-delay: 0.1s;
    left: -14px;
    top: 22px;
  }

  .honeycomb div:nth-child(3) {
    animation-delay: 0.2s;
    left: 14px;
    top: 22px;
  }

  .honeycomb div:nth-child(4) {
    animation-delay: 0.3s;
    left: 28px;
    top: 0;
  }

  .honeycomb div:nth-child(5) {
    animation-delay: 0.4s;
    left: 14px;
    top: -22px;
  }

  .honeycomb div:nth-child(6) {
    animation-delay: 0.5s;
    left: -14px;
    top: -22px;
  }

  .honeycomb div:nth-child(7) {
    animation-delay: 0.6s;
    left: 0;
    top: 0;
  }

  @media (max-width: 768px) {
    .honeycomb {
      transform: scale(0.8);
    }
  }
`;

export default Loader;
