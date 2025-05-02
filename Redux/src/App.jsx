import './App.css'
import { store } from './redux/Store'
import { Provider } from 'react-redux'

import Hero from './Componets/Hero/Hero'



function App() {


  return (
    <>
     <Provider store={store}>
      <Hero/>
   
     </Provider>

    </>
  )
}

export default App
