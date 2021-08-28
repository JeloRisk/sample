import React from 'react'
const Card = (props) =>
{
    const { name, age, course} = props;
    return (
        <div className="card-main">
             <h1> User Card  </h1>
            <div>Name : {name}</div>
            <div>Age : {age} </div>
            <div>Course : {course} </div>
        </div>
        
    )
}
export default Card