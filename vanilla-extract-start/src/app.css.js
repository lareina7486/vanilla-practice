import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css.js';
import { tokens, breakpoints } from '@/styles/tokens.css.js';

export const page = style({
  minHeight: '100vh', // viewport Height = 100%
  padding: tokens.space.xl,
  backgroundColor: vars.color.background,
  color: vars.color.text,
  transition: 'background-color 0.3s ease, color 0.3s ease',  // 부드럽게 변경
});

export const container = style({
  maxWidth: '960px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space.lg,
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space.sm,
});

export const grid = style({
  display: 'grid',
  gap: tokens.space.md,
  // 반응형 그리드
  // 화면 너비에 맞게, 들어갈수 있는 만큼 컬럼 자동 생성
  // 미디어 쿼리 없이도 반응형 가능
  // 화면 넓으면 카드 여러개 나란히, 좁으면 1-2개로 자동 줄바꿈
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  '@media': {
    // 화면이 md 이상이면, 무조건 3열 고정
    [`screen and (min-width: ${breakpoints.md})`]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

export const card = style({
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`, // 모드별로 색깔 달라져서 변수로 표현
  borderRadius: tokens.radius.lg,
  padding: tokens.space.lg,
  boxShadow: tokens.shadow.sm,
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space.sm,
});

export const buttonRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: tokens.space.sm,
});

export const formRow = style({
  display: 'grid',
  gap: tokens.space.sm,
});
