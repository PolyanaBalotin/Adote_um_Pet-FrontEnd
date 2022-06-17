import { useState } from "react"
import { Pet } from "../../@types/Pet"

export function useIndex() {
  const [petsList, setPetsList] = useState(
    [
      {
        id: 1,
        name: 'Bidu',
        history: 'sfsefesfs',
        image: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info'
      }
    ]
  ),
  [selectedPet, setSelectedPet] = useState<Pet | null>(null),
  [email, setEmail] = useState(''),
  [value, setValue] = useState(''),
  [message, setMessage] = useState('');

    function adopt(){}

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