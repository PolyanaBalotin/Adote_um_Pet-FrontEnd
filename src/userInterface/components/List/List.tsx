import { Description,
  Image,
  Info,
  ListItem,
  ListStyled,
  Name } from "./List.style";
import { Button } from '@mui/material';
import { Pet } from '../../../data/@types/Pet';
import { TextService } from "../../../data/services/TextService";

interface ListProps {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function List(props: ListProps){
  const maxTextSize = 200;

  return (
    <ListStyled>
      {props.pets.map(pet => (
        <ListItem key={pet.id} >
          <Image src={pet.image} alt={pet.name} />
          <Info>
          <Name>{pet.name}</Name>
          <Description>
            { TextService.limitText(pet.history, maxTextSize) }
          </Description>
          <Button
            variant={'contained'}
            fullWidth
            onClick={ () => props.onSelect(pet) }
          >
            Adotar {pet.name}
          </Button>
          </Info>
        </ListItem>
      ))}
    </ListStyled>
  )
}