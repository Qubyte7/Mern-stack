import React, {FC} from "react"
interface Workout{
    title:string,
    reps:number;
    load:number;  
    createdAt?:Date;   
    updatedAt?:Date
}

const WorkOutDetails:FC<Workout> = ({title,reps,load,createdAt,updatedAt}) =>{
return <div className="">
    <h4>{title}</h4>
    <p><strong>load(kg) :</strong>{load}</p>
    <p><strong>Reps  :</strong>{reps}</p>
    <p>{createdAt?.toString()}</p>
</div>
}

export default WorkOutDetails