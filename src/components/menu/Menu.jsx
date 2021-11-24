import './menu.scss'

export default function Menu({menuOpen , setMenuOpenorClose}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpenorClose(false)}>
                   <a href="#aboutme">Home</a>
                </li>
                <li onClick={()=>setMenuOpenorClose(false)}>
                <a href="#aboutme">About Me</a>
                </li>
                <li onClick={()=>setMenuOpenorClose(false)}>
                <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpenorClose(false)}>
                <a href="#skills">Skills</a>
                </li> 
                <li onClick={()=>setMenuOpenorClose(false)}>
                <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
