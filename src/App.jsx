import NavBar  from "./components/Navbar/NavBar"
import ItemListContainer from "./components/ItemListContainer/itemListContainer"
function App() {
  return(
    <div>
      {/*navbar */} 
      <NavBar/>
      {/*itemListContainer */}
      <ItemListContainer greeting="Hola Tutor! xD"/>
    </div>
  )
}

export default App
