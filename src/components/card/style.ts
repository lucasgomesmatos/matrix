import { SxProps } from '@mui/material';

export const card: SxProps = {
  width: '300px',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  flexDirection: 'column',

  '& > span': {
    marginBottom: '5px',
    color: '#757575',
  },
};

export const box: SxProps = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  background: '#19191C',
  padding: '1rem',
  gap: '10px',
  borderRadius: '6px',
  transition: '.7s',
  border: '1px solid transparent',

  '&:hover': {
    border: '1px solid #44F24F',
  },
};

export const intro: SxProps = {
  color: '#fff',
  width: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',

  '& span:nth-of-type(1)': {
    color: '#12732A',
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
  },

  '& span:last-child': {
    background: '#000',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    borderRadius: '5px',
  },
};
