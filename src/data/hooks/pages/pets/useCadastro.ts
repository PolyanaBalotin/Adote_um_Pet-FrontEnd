import { AxiosError } from 'axios';
import { useState } from 'react';
import { ApiService } from '../../../services/ApiService';

export function useCadastro() {
  const [name, setName] = useState(''),
    [history, setHistory] = useState(''),
    [image, setImage] = useState(''),
    [message, setMessage] = useState('');

    function validadeForm() {
      return name.length > 2 && history.length > 20 && image.length > 5;
    }

    function clear() {
      setName('');
      setHistory('');
      setImage('');
    }

    function register() {
      if ( validadeForm() ) {
        ApiService.post('/pets', {
          name,
          history,
          image,
        }).then(() => {
          clear();
          setMessage('Pet cadastrado com sucesso!')
        }).catch((error: AxiosError) => {
          setMessage(error.response?.data.message);
        })
      } else {
        setMessage('Preencha todos os campos!');
      }
    }

    return {
      name,
      setName,
      history,
      setHistory,
      image,
      setImage,
      message,
      setMessage,
      register,
    }

}
