import { Box } from '@mui/system';
import * as styles from './style';
import { Card } from '../card';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Content = () => {
  const data = [
    {
      id: 1,
      labelData: '23 de Janeiro de 2023 - 19:00h',
      nome: 'aula 01',
      dataEvento: 1674511140000,
    },
    {
      id: 2,
      labelData: '25 de Janeiro de 2023 - 19:00h',
      nome: 'aula 02',
      dataEvento: 1674683940000,
    },
    {
      id: 3,
      labelData: '27 de Janeiro de 2023 - 19:00h',
      nome: 'aula 03',
      dataEvento: 1674856740000,
    },
  ];

  const links = ['1', '2', '3'];
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!links.includes(id!)) {
      navigate('/1');
    }
  }, []);

  const matches = useMediaQuery('(min-width:1400px)');

  return (
    <Box sx={styles.container}>
      {matches ? (
        <Box sx={styles.main}>
          <Box sx={styles.video}>
            <iframe
              width="960"
              height="630"
              src={`https://www.youtube-nocookie.com/embed/YDTW9e_17e8`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
          <Box sx={styles.menu}>
            {data.map((item) => (
              <Card
                id={item.id}
                key={item.id}
                labelData={item.labelData}
                nome={item.nome}
                dataEvento={item.dataEvento}
              />
            ))}
            <Button sx={styles.button} variant="outlined">
              Materiais
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={styles.mainMobile}>
          <Box sx={styles.videoMobile}>
            <iframe
              width="960"
              height="630"
              src={`https://www.youtube-nocookie.com/embed/YDTW9e_17e8`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
          <Box>
            <Button sx={styles.buttonMobile} variant="outlined">
              Materiais
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};
