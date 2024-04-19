 import PropTypes from "prop-types";
 
 
 const userData = [
    {
        name: "james",
        city: "New york",
        description: "Front-end developer",
        skills: ["UI /UX","Front End Development","HTML","CSS","JavaScript","React","Node"],
        online:false,
        profile:"images/1.jpg",

    },
    {
        name:"robert",
        city:"california",
        description:"full stack web developer",
        skills: ["vlogging","web developemnt","HTML","CSS","JavaScript","React","Angular"],
        online:"false",
        profile:"images/2.jpeg",
    },
    {
        name:"nancy",
        city:"San francisco",
        description:"Senior Software development",
        skills:["c","c++","java programming","python",
    "C#.Net","MySql","MongoDB"],
    online:true,
    profile:"images/3.jpeg",
    
    }
 ];








function User (props)  {
    return (
    <div className="card-container">
        <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile}  className="img"  alt="user" /> 
       <h3>{props.name}</h3>
       <h3>{props.city}</h3>
       <p>{props.description}</p>
    
       
       <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary ">Following</button>
       </div>
       <div className="skills">
        <h6>Skills</h6>
        <ul>
             {props.skills.map((skill,index)=>(
                <li key={index}>{skill}</li>
             ))}
        </ul>
       </div>
        

    </div> 
    )
}
export const UserCard = () => {
  return  (<>
  {
    userData.map((user,index)=>(
     <User key={index}
     name={user.name}
     city={user.city}
     description={user.description}
     online={user.online}
     profile={user.profile}
     skills={user.skills}/>   
    ))
  }
  </>
  )
  
        // <User name="james" city="vavuniya" description="Front-end developer"
        // skills={["UI/UX","Front End Development", "HTML","CSS","JavaScript","React","Node"]} online={true}
        // profile="images/1.jpg"/>
 
 
}
User.PropTypes ={
    name : PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired,
}
