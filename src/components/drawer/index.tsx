import { Box } from '@mui/system';
import * as styles from './style';
import { Card } from '../card';
import { Button, Drawer } from '@mui/material';

export const DrawerMenu = () => {
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

  return (
    <Drawer
      open={true}
      variant={'permanent'}
      anchor={'right'}
      sx={styles.modal}
    >
      <Box sx={styles.header}>
        <Box>
          <img src="/logo.svg" alt="Professor fora da Matrix" />
        </Box>
        <Box sx={styles.nav}>
          {data.map((item) => (
            <Card
              key={item.id}
              labelData={item.labelData}
              nome={item.nome}
              dataEvento={item.dataEvento}
            />
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};
