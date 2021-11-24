import ListOfCategory from '../listofcategory/ListOfCategory'
import './portfolio.scss'
import { useState , useEffect } from 'react'
import {reactjsFeatured,
        javascriptFeatured,
        uiFeatured,
        htmlcssFeatured,
        wordpressFeatured} from'../../data'


export default function Portfolio() {
    const [selected , setSelected] = useState("reactjs")
    const [data,setData] = useState([])
    const list =[
    {
        id:"reactjs",
        title:"ReactJs",
    },
    {
        id:"js",
        title:"Javascript",
    },
    {
        id:"uiux",
        title:"UI/UX",
    },
    {
        id:"wordpress",
        title:"Wordpress",
    },
    {
        id:"htmlcss",
        title:"HTML/CSS",
    }]
    useEffect(()=>{
       
        switch(selected){
        case "reactjs":
        setData(reactjsFeatured);
        break;
        case "js":
        setData(javascriptFeatured);
        break;
        case "uiux":
        setData(uiFeatured);
        break;
        case "wordpress":
        setData(wordpressFeatured);
        break;
        case "htmlcss":
        setData(htmlcssFeatured);
        break;
        default:
            setData(reactjsFeatured)
        }
    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1> My Portfolio </h1>
            <ul>
                {list.map(item=>(
                    <ListOfCategory title={item.title} 
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
               {data.map(d=>( 
               <div className="item">
                <img src={d.img} alt=""></img>
                <h3>{d.title}</h3>
                </div>
                ))}
            </div>
            

        </div>
    )
}
