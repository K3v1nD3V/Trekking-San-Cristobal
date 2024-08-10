import { Header } from './views/LandingPage/Header'
import { Fotter } from './views/LandingPage/Footer';

function App() {

  return ( 
    <>
      <Header/>
      {/* Los demas componentes van entre header y el footer, no se fijen en el orden*/}
      <Fotter/>
    </>
  )
}

export default App;
