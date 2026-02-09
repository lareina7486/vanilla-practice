import { createGlobalTheme } from '@vanilla-extract/css';

export const tokens = createGlobalTheme(':root', {
  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  radius: {
    md: '12px',
    lg: '16px',
  },
  shadow: {
    sm: '0 8px 20px rgba(15, 23, 42, 0.08)',
  },
});

// ⚠️ 중요: breakpoint는 별도의 일반 상수로 정의
// CSS 미디어 쿼리에서는 var()를 사용할 수 없습니다
/* ❌ 작동하지 않음 */
// @media (min-width: var(--breakpoint-md))

export const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
};