import { useState, useEffect } from 'react';
import { Pet } from '../../@types/Pet';
import { ApiService } from '../../services/ApiService';
import { AxiosError } from 'axios';

export function useIndex() {
  const [petsList, setPetsList] = useState<Pet[]>([]),
  [selectedPet, setSelectedPet] = useState<Pet | null>(null),
  [email, setEmail] = useState(''),
  [value, setValue] = useState(''),
  [message, setMessage] = useState('');

  useEffect(() => {
    ApiService.get('/pets')
    .then((response) => {
      setPetsList(response.data);
    })
  }, [])

  function validateAdoptionData() {
    return email.length > 0 && value.length > 0;
  }

  function clearForm() {
    setEmail('');
    setValue('');
  }

  function adopt(){
    if (selectedPet !== null) {
      if (validateAdoptionData()) {
        ApiService.post('/adoptions', {
          pet_id: selectedPet.id,
          email,
          value,
        }).then(() => {
          setSelectedPet(null),
          setMessage('Pet adotado com sucesso!')
          clearForm();
        }).catch((error: AxiosError) => {
          setMessage(error.response?.data.message)
        })
      } else {
        setMessage('Preencha todos os campos corretamente')
      }
    }
  }

  return{
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
  }
}