import { css, keyframes } from "styled-components";

// ============ PAGE TRANSITION ANIMATIONS ============
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeOutDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(30px);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// ============ NAVBAR/HEADER ANIMATIONS ============
export const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

// ============ BUTTON ANIMATIONS ============
export const buttonScale = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.98);
  }
`;

export const buttonScaleReverse = keyframes`
  from {
    transform: scale(0.98);
  }
  to {
    transform: scale(1);
  }
`;

export const buttonGlow = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(234, 142, 49, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(234, 142, 49, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(234, 142, 49, 0);
  }
`;

// ============ LINK ANIMATIONS ============
export const underlineSlide = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const underlineSlideReverse = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

export const linkColorShift = keyframes`
  from {
    color: #FFF;
  }
  to {
    color: #EA8E31;
  }
`;

// ============ DROPDOWN ANIMATIONS ============
export const dropdownSlideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const dropdownSlideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

// ============ REUSABLE ANIMATION MIXINS ============
export const pageEnterAnimation = css`
  animation: ${fadeInUp} 0.6s ease-out;
`;

export const pageExitAnimation = css`
  animation: ${fadeOutDown} 0.4s ease-in;
`;

export const navbarEnterAnimation = css`
  animation: ${slideDown} 0.5s ease-out;
`;

export const buttonHoverAnimation = css`
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    animation: ${buttonScale} 0.2s ease-in-out;
  }
`;

export const linkHoverAnimation = css`
  position: relative;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #EA8E31;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

export const dropdownAnimation = css`
  animation: ${dropdownSlideDown} 0.3s ease-out;
`;

export const iconSpinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

// ============ STAGGER ANIMATIONS ============
export const staggerContainer = css`
  display: contents;
`;

export const staggerItem = (index: number) => css`
  animation: ${fadeInUp} 0.6s ease-out ${index * 0.1}s backwards;
`;
