import { useRef } from "react";



const FormLogin = (props) => {

    const { setUsername } = props

    const username = useRef();

    function handleLogin(e){
        const filteredUsername = username.current.value;
        e.preventDefault();
       
        if(filteredUsername.trim() != "" && filteredUsername.length < 18){
            setUsername(filteredUsername);
        }
        else{
            alert('Inserisci un nome valido');
        }
    }
    return(
        <form className="flex flex-col gap-4">
            <input maxlength="18" type="text" ref={username} placeholder="Come ti chiami?" />
            <button onClick={handleLogin}>Conferma</button>
        </form>
    )
}

export default FormLogin;