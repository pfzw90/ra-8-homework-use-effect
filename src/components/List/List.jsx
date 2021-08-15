import { useState, useEffect } from 'react';
import dataLoader from './DataLoader';
import Details from './Details/Details'
import './List.css'


export default function List() {

    const [isLoading,setLoading] = useState(false);
    const [currentUser,setCurrentUser] = useState(null);
    const [userList, setUserList] = useState([])

    const fetchList = dataLoader('/data/users.json');

    useEffect(() => {
        setLoading(true)
        fetchList().then(data => {
            setUserList(data);
        });
        setLoading(false)
        return;
    },[]);
    

    const handleClick = (e) => {
        e.preventDefault();
        const user = {name: e.target.dataset.name, id: e.target.id}
        setCurrentUser(user)
    }

    return (isLoading) ? 
                    (<div className='Loading'>Loading</div>) : 
                    (
                        <div className="List">
                        <ul className="Users-List">
                            {userList.map(item => {
                                const active = (currentUser && item.id.toString() === currentUser.id) ? ' active' : ''
                                return (
                                    <li className={`List-item${active}`} data-name={item.name} id={item.id} key={item.id} onClick={handleClick}>
                                        {item.name}
                                    </li>
                                )
                            })}
                        </ul>
                        {currentUser && <Details {...currentUser}/>}
                        </div>
                    )
}