import { SxProps } from '@mui/material';

export const container: SxProps = {
  width: '100%',
  height: 'calc(100vh - 100px)',
  padding: '1rem 1rem',
};

export const main: SxProps = {
  maxWidth: '1400px',
  height: '100%',
  margin: '0 auto',
  gap: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const mainMobile: SxProps = {
  width: '100%',
  maxWidth: '1180px',
  margin: '2rem auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const video: SxProps = {
  width: '85%',
  objectFit: 'cover',
};

export const videoMobile: SxProps = {
  width: '100%',
  paddingBottom: '59%',
  position: 'relative',

  '& iframe': {
    position: 'absolute',
    top: '5%',
    left: '5%',
    width: '90%',
    height: '90%',
  },
};

export const menu: SxProps = {
  width: '25%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '30px',
};

export const button: SxProps = {
  height: '3rem',
  width: '8rem',
  color: 'var(--green-100)',
  borderColor: 'var(--green-100)',

  '&:hover': {
    color: 'var(--white)',
    borderColor: 'var(--white)',
  },
};

export const buttonMobile: SxProps = {
  marginTop: '2rem',
  height: '3rem',
  width: '8rem',
  color: 'var(--green-100)',
  borderColor: 'var(--green-100)',

  '&:hover': {
    color: 'var(--white)',
    borderColor: 'var(--white)',
  },
};
