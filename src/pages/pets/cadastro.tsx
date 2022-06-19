import { NextPage } from 'next';
import { useCadastro } from '../../data/hooks/pages/pets/useCadastro';
import Title from '../../userInterface/components/Title/Title';
import { Paper, Grid, TextField, Button, Snackbar } from '@mui/material';

const Cadastro: NextPage = () => {

  const {
    name,
    setName,
    history,
    setHistory,
    image,
    setImage,
    message,
    setMessage,
    register,
  } = useCadastro();

  return (
    <>
      <Title 
        title={ 'Cadastro de Pets para Adoção' }
        subtitle={ 'Preencha os dados do novo Pet' }
      />

      <Paper sx={{ maxWidth: 970, mx: 'auto', p: 5 }}>
        <Grid container spacing={ 3 } >
          <Grid item xs={ 12 } >
            <TextField
              label={ 'Nome' }
              value={ name }
              onChange={ (e) => setName(e.target.value) }
              placeholder={ 'Digite o nome do pet' }
              fullWidth
            />
          </Grid>
          <Grid item xs={ 12 } >
            <TextField
              label={ 'História do Pet' }
              value={ history }
              onChange={ (e) => setHistory(e.target.value) }
              multiline
              fullWidth
              rows={ 4 }
            />
          </Grid>
          <Grid item xs={ 12 } >
            <TextField
              label={ 'Foto' }
              value={ image }
              onChange={ (e) => setImage(e.target.value) }
              placeholder={ 'Digite o endereço da imagem' }
              fullWidth
            />
            <Button
              variant={ 'contained' }
              color={ 'secondary' }
              sx={{ mt: 2 }}
              component={ 'a' }
              href={ 'https://imgur.com/upload' }
              target={ '_blank' }
            >
              Enviar Imagem
            </Button>
          </Grid>
          <Grid item xs={ 12 } sx={{ textAlign: 'center' }} >
            <Button
              onClick={ register }
              variant={ 'contained' }
              fullWidth
              sx={{ maxWidth: { md: 200 }, mt: 4 }}
            >
              Cadastrar Pet
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Snackbar
        open={ message.length > 0 }
        autoHideDuration={ 2500 }
        onClose={ () => setMessage('') }
        message={ message }
      />
    </>
  )
}

export default Cadastro;