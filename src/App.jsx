import NavBar from "./components/navBar"
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

function App() {

  return (
    <>
      <NavBar/>
    </>
  )
}

export default App
