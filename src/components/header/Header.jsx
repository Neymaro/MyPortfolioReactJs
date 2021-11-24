import './header.scss';
import { Mail , EmojiPeople } from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function header() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const textRef = useRef();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed:60,
          strings: ["Software", "React", "Javascript","Frontend"],
        });
      }, []);

    return (
        <div className="header"  id="aboutme">
           <div className="left">
            <div className="wrapper">
                <h2>Hi, there! I'm</h2>
                <h1>Hamza Ünsal</h1>
                <h3><span ref={textRef}></span> Developer</h3>
                <span className="text">Front End Developer who focuses on writing clean, elegant and efficient code.If you would like collabrate, work or more informations, please contact with me.</span>
                <div className="buttons">
                   <a href="#skills">
                       <span className="button left-btn" ><EmojiPeople className="icons"/> about me</span>
                    </a>
                    <a href="mailto:hamzaunsall@gmail.com">
                    <span className="button right-btn" ><Mail className="icons"/> email me</span>
                    </a>
                </div>
            </div>
           </div>
           <div className="right">
                <img src="img/desk-guy.png" className="image" alt=""></img>
           </div>
        </div>
    )
}
