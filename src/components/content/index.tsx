import { Box } from '@mui/system';
import * as styles from './style';
import { Card } from '../card';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useParams, useNavigate, json } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { VideoPlayer } from '../videoPlayer';

export const Content = () => {
  const data = [
    {
      id: 1,
      labelData: '23 de Janeiro de 2023 - 19:00h',
      nome: 'Aula 1 - Criatividade',
      dataEvento: 1674511140000,
      linkAula: 'V8uVAf8QhsI',
      material:
        'https://drive.google.com/drive/folders/1k1zeW9m48U4IAiZihiOWgNfEfgG2etRB',
    },
    {
      id: 2,
      labelData: '25 de Janeiro de 2023 - 19:00h',
      nome: 'Aula 2 - Agilidade',
      dataEvento: 1674683940000,
      linkAula: 'o1TTXiUV8vc',
      material:
        'https://drive.google.com/drive/folders/1r5VL0hlaWhW9NCDsJ2HVG16fyr_XTHmP',
    },
    {
      id: 3,
      labelData: '27 de Janeiro de 2023 - 19:00h',
      nome: 'Aula 3 - Transformação',
      dataEvento: 1674856740000,
      linkAula: '6F8jU8wlzeQ',
      material:
        'https://drive.google.com/drive/folders/10_68L-1qUkHeXTFOlp8xCyD6vZN6b_Ho',
    },
  ];

  const links = ['1', '2', '3'];
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentVideo, setCurrentVideo] = useState('');

  useEffect(() => {
    const video = data
      ?.filter((item) => item.id === Number(id))
      .flatMap((item) => item.linkAula);

    setCurrentVideo(video.toString());
  }, [id]);

  useEffect(() => {
    if (!links.includes(id!)) {
      navigate('/1');
    }
  }, []);

  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 720000);
  }, []);

  console.log(count);

  const matches = useMediaQuery('(min-width:1400px)');

  return (
    <Box sx={styles.container}>
      {matches ? (
        <Box sx={styles.main}>
          <Box sx={styles.video}>
            <VideoPlayer link={currentVideo} />
          </Box>
          <Box sx={styles.menu}>
            {data?.map((item) => (
              <Card
                id={item.id}
                key={item.id}
                labelData={item.labelData}
                nome={item.nome}
                dataEvento={item.dataEvento}
              />
            ))}
            <Box sx={{ display: 'flex', gap: '2rem' }}>
              <a
                href={`${data
                  .filter((item) => item.id === Number(id))
                  .flatMap((item) => item.material.toString())}`}
                target="_blank"
              >
                <Button sx={styles.buttonMobile} variant="outlined">
                  Materiais
                </Button>
              </a>
              {count >= 1 && (
                <>
                  <a
                    href="https://chat.whatsapp.com/GpCpbNxHhlBHCaKGYgen3d"
                    target="_blank"
                  >
                    <Button sx={styles.buttonMobile} variant="outlined">
                      Grupo Vip
                    </Button>
                  </a>
                </>
              )}
            </Box>
          </Box>
        </Box>
      ) : (
        <Box sx={styles.mainMobile}>
          <Box sx={styles.videoMobile}>
            <VideoPlayer link={currentVideo} />
          </Box>
          <Box sx={{ display: 'flex', gap: '2rem' }}>
            <a
              href={`${data
                .filter((item) => item.id === Number(id))
                .flatMap((item) => item.material.toString())}`}
              target="_blank"
            >
              <Button sx={styles.buttonMobile} variant="outlined">
                Materiais
              </Button>
            </a>
            {count >= 1 && (
              <>
                <a
                  href="https://chat.whatsapp.com/GpCpbNxHhlBHCaKGYgen3d"
                  target="_blank"
                >
                  <Button sx={styles.buttonMobile} variant="outlined">
                    Grupo Vip
                  </Button>
                </a>
              </>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};
