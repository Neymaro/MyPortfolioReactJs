import './skills.scss'

export default function Skills() {

    const data = [
        {
          id: 1,
          name: "React",
          img:
            "img/react-skill.jpg",
          desc:
            "I am coding with ReactJs tech.React allows us to create large web applications that can change data, without reloading the page",
        },
        {
            id: 2,
            name: "Javascript",
            img:
              "img/js-skill.jpg",
            desc:
              "My favourite language is JS! That's because , you can see directly what you code. That motivates me more and I can consantrate easily.",
        },
        {
            id: 3,
            name: "UI/UX Programs",
            img:
              "img/Figma.jpg",
            desc:
              "I am enjoying a lot to design and after that export with my React codes...",
        },
      ];
    return (
        <div className="skills" id="skills">
            <h1>My Skills</h1>
            <div className="container">
            {data.map(d=>(
                <div className="card">
                    <div className="top">
                    <img src={d.img} alt="" />
                    </div>
                    <div className="center">
                    {d.desc} </div>
                    <div className="bottom">
                    <h3>{d.name}</h3>
                    </div>
                </div>  
            ))}
            </div>
        </div>
    )
}
