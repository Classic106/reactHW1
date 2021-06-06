import { useState } from 'react';
import userData from './userData.js';
import UserCart from './User_cart';
import Header from './Header.js';
import Modal from './Modal';

export default function Main() {
    
    const [search, setSearch] = useState(['', '0']);
    const [openModal, setOpenModal] = useState(false);
    const [user, setUser] = useState({});

    return (
    <>  
        <Header updateData={setSearch} data={search}/>
        <div className="main">
            {(()=>{

                const result = userData.filter(el => {   
                    if(search[0]){
                        return (el.name.toLocaleLowerCase().includes(search[0].toLocaleLowerCase())) ? true : false;
                    }
                        return true;
                });

                if(search[1] === 'asc'){
                    result.sort((a, b)=>+a.age - +b.age);
                }else if(search[1] === 'desc'){
                    result.sort((a, b)=> +b.age - +a.age);
                };

                return result.map((el)=><UserCart user={el} key={el.name} OpenModal={setOpenModal} setUser={setUser}/>);

            })()}
            {openModal && <Modal openModal={setOpenModal} user={user}/>}
        </div>
    </>
    );
  }
