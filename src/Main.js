import React, { useState } from 'react';
import userData from './userData.js';
import Users from './Users.js';
import Header from './Header.js';

export default function Main() {
    
    const [search, setSearch] = useState(['', '0']);

    const HandelFilter = ()=>{

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
        
        return result;
    }

    return (<>  
        <Header updateData={setSearch} data={search}/>
        <Users HandelFilter={HandelFilter}/>
    </>);
  }
