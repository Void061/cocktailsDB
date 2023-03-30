import { useRef, useEffect, useState } from "react";



const FormLogin = (props) => {

    const { setUsername, currentAvatar, setAvatar } = props

    const username = useRef();

    const [errors, setErrors] = useState({text: "", active: false})
    
    const avatars = [
        'Naruto.png',
        'Karen.png',
        'Max.png',
        'Marvin.png',
        'Nina.png',
        'Viking.png',

    ]


    function handleAvatars(avatar){

        if(avatar == currentAvatar){
            setAvatar("");
        }
        else{
            localStorage.setItem('avatar', avatar);
            setAvatar(avatar);
        }
        
        
    }
    function handleLogin(e){
        const filteredUsername = username.current.value;
        e.preventDefault();
        
        if(filteredUsername.trim()  == "" || filteredUsername.length > 18){
            const objError = {text: 'Inserisci username (max 18 caratteri)', active:true}
            setErrors(objError);
        }
        else if(currentAvatar.trim() == "" || !avatars.includes(currentAvatar)){
            const objError = {text: 'Assicurati d\'aver scelto un avatar tra quelli indicati', active:true}
            setErrors(objError);
        }
          
        else{
            localStorage.setItem('username', filteredUsername);
          
            setUsername(filteredUsername);
        }
        
    }
    return(
        <form className="max-w-[300px]  m-auto flex flex-col gap-4">
            <h2 className="text-[white] pb-[40px]">Seleziona un avatar</h2>
            <div className="flex flex-wrap pb-[60px] gap-8 justify-center">
                {
                    avatars.map((item, index) => (
                        <div onClick={() => handleAvatars(item)} key={index} className={currentAvatar == item ? "border-2 border-secondary scale-[1.5] noselect cursor-pointer rounded-[50%] bg-[white] flex items-center justify-center p-4 transition-all" : "border-2 border-[transparent] noselect cursor-pointer rounded-[50%] bg-[white] flex items-center justify-center p-4 transition-all hover:scale-[1.3]"}>
                            <img className="noselect max-w-[40px] max-h-[40px] " src={"/images/avatars/"+item} alt={"avatar-"+index} />
                        </div>
                    ))
                }
                
               

            </div>

            <input maxLength="18" type="text" ref={username} placeholder="Come ti chiami?" className="outline-none border-0 rounded px-[30px] py-[10px]"/>
            <button className="bg-secondary font-semibold px-[30px] py-[10px] text-primary border-0 rounded outline-none" onClick={handleLogin}>Conferma</button>

            {
                errors.active ? <div>
                    <h2 className="text-[red] text-center">{errors.text}</h2>
                </div> : null
            }
        </form>
    )
}

export default FormLogin;