import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Portfolio from "./components/portfolio/Portfolio"
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact"
import "./App.scss" 
import {useState} from "react"
import Menu from "./components/menu/Menu"

function App() {
  const[menuOpen,setMenuOpenorClose] = useState(false);
  return (
    <div className="app">
     <Navbar menuOpen={menuOpen} setMenuOpenorClose={setMenuOpenorClose}/>
     <Menu menuOpen={menuOpen} setMenuOpenorClose={setMenuOpenorClose} />
     <div className="section">
      <Header/>
      <Portfolio/>
      <Skills/>
      <Contact/>
     </div>
    </div>
  );
}

export default App; 
