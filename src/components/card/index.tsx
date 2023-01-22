import * as styles from './style';
import { Box } from '@mui/material';
import { IoMdLock, IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

interface ICardProps {
  id: number;
  labelData: string;
  nome: string;
  dataEvento: number;
}

export const Card = ({ id, labelData, nome, dataEvento }: ICardProps) => {
  // const date = Number(new Date());
  // const date = Number(new Date('Jan 27 2023 18:59:00 GMT-0300'));

  return (
    <>
      {new Date() >= new Date(dataEvento) ? (
        <Link to={`/${id}`}>
          <Box sx={styles.card}>
            <span>{labelData}</span>
            <Box sx={styles.box}>
              <div>{nome}</div>
              <Box sx={styles.intro}>
                <span>
                  <IoIosCheckmarkCircleOutline size={24} />
                  Aula Liberada
                </span>
                <span>Aula Prática</span>
              </Box>
            </Box>
          </Box>
        </Link>
      ) : (
        <Box sx={styles.card}>
          <span>{labelData}</span>
          <Box sx={styles.box}>
            <div>{nome}</div>
            <Box sx={styles.intro}>
              <span>
                <IoMdLock size={24} />
                Em Breve
              </span>
              <span>Aula Prática</span>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
