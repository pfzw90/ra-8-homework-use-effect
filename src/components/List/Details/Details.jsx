import { useEffect,useState } from "react";
import dataLoader from '../DataLoader'

export default function Details(props) {
    const [isLoading, setLoading] = useState(true);
    const [currentUser, setUser] = useState(null); 
   
    useEffect(() => {
        setLoading(true)
        dataLoader(`/data/${props.id}.json`)().then(data=>{
            setUser(data)
            setLoading(false)  
        });                
        return;
    },[props.id])

    return (isLoading) ? 
                    (<div className='Loading'>Loading</div>) :
                    (
                        <div className="Details">
                            <img src={currentUser.avatar} alt={currentUser.name} className="avatar"/>
                            <div className="name">{props.name}</div>
                            <div className="city">City: {currentUser.details.city}</div>
                            <div className="company">Company: {currentUser.details.company}</div>
                            <div className="position">Position: {currentUser.details.position}</div>
                        </div>
                    )
}