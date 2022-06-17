import type { NextPage } from 'next';
import Title from '../userInterface/components/Title/Title';
import List from '../userInterface/components/List/List';
import { Dialog,
  TextField,
  Grid,
  DialogActions,
  Button,
  Snackbar } from '@mui/material';


const Home: NextPage = () => {
  return (
    <div>
      <Title
        title="" 
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        } />
      
      <List
      pets={[
        {
          id: 1,
          name: 'Bidu',
          history: 'sfsefesfs',
          image: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info'
        }
      ]}
      />

      <Dialog
        open={ false }
        fullWidth
        PaperProps={{ sx: { padding: 5 } }}
      >
        <Grid container spacing={ 2 } >
          <Grid item xs={ 12 } >
            <TextField
              type={ 'email' }
              label={ 'E-mail' }
              fullWidth
            />
          </Grid>
          <Grid item xs={ 12 } >
            <TextField
              type={ 'number' }
              label={ 'Quantia por mês' }
              fullWidth
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ marginTop: 5 }}>
          <Button
            color={ 'secondary' }
          >
            Cancelar
          </Button>
          <Button
            variant={ 'contained' }
          >
            Confirmar adoção
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        open={ false }
        message={ 'test' }
      />

    </div>
  )
}

export default Home
