import { NextPage } from 'next';
import Title from '../../userInterface/components/Title/Title';
import { TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody } from '@mui/material';
import { UseReport } from '../../data/hooks/pages/pets/UseReport';

const Relatorio: NextPage = () => {
  const { reportList } = UseReport();
  return (
    <>
      <Title
        title={ 'Relatório de Adoção' }
        subtitle={ 'Veja a lista de pets adotados' }
      />
      <TableContainer
        sx={{ maxWidth: 830, mx: 'auto', p: { xs: 3, md: 5 } }}
        component={ Paper }
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pet</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell align={ 'right' }>Valor Mensal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { reportList.map((report) => (
              <TableRow key={ report.id }>
                <TableCell>{ report.pet.name }</TableCell>
                <TableCell>{ report.email }</TableCell>
                <TableCell align={ 'right' }>{ report.value }</TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Relatorio;
