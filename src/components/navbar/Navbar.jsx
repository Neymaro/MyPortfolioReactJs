import './navbar.scss'
import { Mail } from "@material-ui/icons";


export default function Navbar({menuOpen,setMenuOpenorClose}) {
    return (
        <div className={"navbar " + (menuOpen && "active")} id="home">
            <class className="wrapper">
                <div className="left-side">
                <a  href="#skills">
                    <img src="logo.png" className="logo" alt="logo"></img>
                    </a>    
                <Mail className="mail"/>
                <div className="mail-name">hamzaunsall@gmail.com</div>
                </div>
                <div className="right-side">
                    <div className="hamburger" onClick={()=>setMenuOpenorClose(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </class>
        </div>
    )
}
