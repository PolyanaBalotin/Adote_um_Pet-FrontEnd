import type { NextPage } from 'next';
import Title from '../userInterface/components/Title/Title';
import List from '../userInterface/components/List/List';
import { useIndex } from '../data/hooks/pages/useIndex';
import { Dialog,
  TextField,
  Grid,
  DialogActions,
  Button,
  Snackbar } from '@mui/material';


const Home: NextPage = () => {
  const {
    petsList,
    selectedPet,
    setSelectedPet,
    email,
    setEmail,
    value,
    setValue,
    message,
    setMessage,
    adopt,
  } = useIndex();

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
      pets={ petsList }
      onSelect={(pet) => setSelectedPet(pet)}
      />

      <Dialog
        open={ selectedPet !== null }
        fullWidth
        PaperProps={{ sx: { padding: 5 } }}
        onClose={ () => setSelectedPet(null) }
      >
        <Grid container spacing={ 2 } >
          <Grid item xs={ 12 } >
            <TextField
              type={ 'email' }
              label={ 'E-mail' }
              fullWidth
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
            />
          </Grid>
          <Grid item xs={ 12 } >
            <TextField
              type={ 'number' }
              label={ 'Quantia por mês' }
              fullWidth
              value={ value }
              onChange={ (e) => setValue(e.target.value) }
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ marginTop: 5 }}>
          <Button
            color={ 'secondary' }
            onClick={ () => setSelectedPet(null) }
          >
            Cancelar
          </Button>
          <Button
            variant={ 'contained' }
            onClick={ () => adopt() }
          >
            Confirmar adoção
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        open={ message.length > 0 }
        message={ message }
        autoHideDuration={ 2500 }
        onClose={ () => setMessage('') }
      />

    </div>
  )
}

export default Home
