import type { NextPage } from 'next'
import Title from '../userInterface/components/Title/Title'


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

    </div>
  )
}

export default Home
