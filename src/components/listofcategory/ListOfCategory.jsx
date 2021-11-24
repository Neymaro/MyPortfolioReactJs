export default function ListOfCategory({id,title,setSelected,active}) {
    return (
        <li className={active ? "categorylist active" : "categorylist"} 
            onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}
