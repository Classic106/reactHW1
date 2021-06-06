export default function User_cart(props) {
    
    return (
        <div className="user_cart" onClick={()=>{
            props.OpenModal(true);
            props.setUser(props.user);
        }}>
            <img src={props.user.picture} alt='picrure'/>
            <span>
                Name: {props.user.name}
            </span>
            <span>
                age: {props.user.age}
            </span>
            <span>
                gender: {props.user.gender}
            </span>
            <span>
                balanse: {props.user.balance}
            </span>
        </div>
    )
}
