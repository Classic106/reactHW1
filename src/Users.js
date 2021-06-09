import React, { useState } from 'react';
import Modal from './Modal.js';
import UserCart from './UserCart.js';

const Users = (props)=>{

    const [openModal, setOpenModal] = useState(false);
    const [user, setUser] = useState({});

    return(
    <div className="users">
        {props.HandelFilter().map((el)=>
            <UserCart
                user={el}
                key={el.name}
                OpenModal={setOpenModal}
                setUser={setUser}
            />)
        }
        {openModal && <Modal openModal={setOpenModal} user={user}/>}
    </div>
    )
}

export default Users;