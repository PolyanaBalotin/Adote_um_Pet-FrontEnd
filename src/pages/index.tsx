import type { NextPage } from 'next'
import Title from '../userInterface/components/Title/Title'
import List from '../userInterface/components/List/List';


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

    </div>
  )
}

export default Home
