export default function Modal(props) {

    return (
    <div className='modal_page'>
        <div className='backModal' onClick={()=>props.openModal(false)}></div>
        <div className="modalcart">
            {(()=>{

                let arr = [];

                for(let key in props.user){
                    
                    if(key === 'friends') {
                        arr.push(
                            <div key={key}>{key}: {(()=>{
                            
                                let arr = [];

                                for(let i = 0; i < props.user[key].length; i++){
                                    arr.push(<span
                                                key={props.user[key][i].name}>
                                                {props.user[key][i].name}
                                                {(props.user[key].length-1 === i) ? '' : ', '}
                                            </span>);
                                    }
                                return arr;
                            })()}
                        </div>);
                        
                        continue;
                    }
                    
                    if(key === 'tags') {
                        arr.push(
                            <div key={key}>{key}: {(()=>{

                                let str = '';
                            
                                for(let i = 0; i < props.user[key].length; i++){
                                    str += props.user[key][i]+',';
                                }
                            
                                return str.slice(0, str.length-1);

                                })()}
                            </div>
                        );
                        continue;
                    }
                    
                    if(key === 'picture') {
                        arr.unshift(<img src={props.user[key]} alt='img' key={key}/>);
                        continue;
                    }

                    if(key === 'registered') {
                        arr.push(
                        <span key={key}>
                            {key}: {new Date(Date(props.user[key])).toLocaleDateString('ru-Ru')}
                        </span>
                        );
                        continue;
                    }

                    arr.push(<span key={key}>{key}: {props.user[key]}</span>);
                }
                    return arr;
                })()
            }
        </div>
    </div>
    )
}