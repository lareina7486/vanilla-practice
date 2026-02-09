import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css.js';
import { tokens, breakpoints } from '@/styles/tokens.css.js';

export const page = style({
  minHeight: '100vh',
  padding: tokens.space.xl,
  backgroundColor: vars.color.background,
  color: vars.color.text,
});

export const grid = style({
  display: 'grid',
  gap: tokens.space.md,
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  // 이 부분
  '@media': {
    [`screen and (min-width: ${breakpoints.md})`]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

export const card = style({
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: tokens.radius.lg,
  padding: tokens.space.lg,
  boxShadow: tokens.shadow.sm,
});

export const container = style({
  padding: '16px',
  fontSize: '14px',
  '@media': {
    [`screen and (min-width: ${breakpoints.sm})`]: { // 480px 이상에서 적용
      padding: '20px',
      fontSize: '15px',
    },
    [`screen and (min-width: ${breakpoints.md})`]: { // 768px 이상에서 적용
      padding: '24px',
      fontSize: '16px',
    },
    [`screen and (min-width: ${breakpoints.lg})`]: { // 1024px 이상에서 적용
      padding: '32px',
      fontSize: '18px',
    },
  },
});