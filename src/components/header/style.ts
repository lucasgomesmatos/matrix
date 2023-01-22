import { SxProps } from '@mui/material';

export const container: SxProps = {
  width: '100%',
  height: '100px',
  padding: '1rem 2rem',
  borderBottom: '1px solid var(--bg-2)',
};

export const header: SxProps = {
  maxWidth: '1400px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
};

export const drawer: SxProps = {
  display: 'flex',
  gap: '30px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '380px',
  height: '100%',
  background: 'var(--bg-1)',
};
