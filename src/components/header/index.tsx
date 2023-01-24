import { Box, Button, Drawer, useMediaQuery } from '@mui/material';
import * as styles from './style';
import { HiBars2, HiOutlineXMark } from 'react-icons/hi2';
import { useState } from 'react';
import { Card } from '../card';

export const Header = () => {
  const matches = useMediaQuery('(min-width:1400px)');
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }

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
      linkAula: 'V8uVAf8QhsI',
      material:
        'https://drive.google.com/drive/folders/1k1zeW9m48U4IAiZihiOWgNfEfgG2etRB',
    },
  ];

  return (
    <Box sx={styles.container} component="header">
      <Box sx={styles.header}>
        <img src="/logo.svg" alt="Professor fora da Matrix" />
        {!matches ? (
          <>
            <Button onClick={handleToggle}>
              <HiBars2 size={32} color="var(--green-100)" />
            </Button>
            <Drawer anchor={'right'} open={open} onClose={handleToggle}>
              <Box sx={styles.drawer}>
                <Button onClick={handleToggle}>
                  <HiOutlineXMark size={32} color="var(--green-100)" />
                </Button>
                {data.map((item) => (
                  <Box onClick={handleToggle} key={item.id}>
                    <Card
                      id={item.id}
                      key={item.id}
                      labelData={item.labelData}
                      nome={item.nome}
                      dataEvento={item.dataEvento}
                    />
                  </Box>
                ))}
              </Box>
            </Drawer>
          </>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};
