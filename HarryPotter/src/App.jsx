import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import Characters from './pages/Characters/Characters';
import Teachers from './pages/Teachers/Teachers';
import Houses from './pages/Houses/Houses';
import Footer from './components/Footer/Footer';
import { HarryPotterContextProvider } from './context/context.jsx';
import CharacterDetail from './components/CharacterPortrait/CharacterDetail/CharacterDetail';
import StaffDetail from './components/StaffPortrait/StaffDetail/StaffDetail'

function App() {

  return (
    <div className="App">
      <Router>
        <HarryPotterContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element=''></Route>
          <Route path='/characters' element={ <Characters /> }></Route>
          <Route path='/characters/:name' element={ <CharacterDetail /> }></Route>
          <Route path='/teachers' element={ <Teachers /> }></Route>
          <Route path='/teachers/:name' element={ <StaffDetail /> }></Route>
          <Route path='/houses' element={ <Houses /> }></Route>
        </Routes>
        <Footer />
        </HarryPotterContextProvider>
      </Router>
    </div>
  )
}

export default App
