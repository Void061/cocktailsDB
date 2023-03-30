import Avatar from "./avatar";

import { useRouter } from 'next/router'

const Header = (props) => {

    const router = useRouter();
    function handleLogout(){
        localStorage.setItem('avatar', "");
        localStorage.setItem('username', "");
        router.reload();
    }
    return(
        <div className="bg-primary">
            <div className="max-w-[1200px] p-4 mx-auto">
               <div className="flex">
                    <div className="flex-1 flex justify-end gap-4">
                        <Avatar currentAvatar={props.currentAvatar}/>
                        <button onClick={handleLogout}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 7V17C20.5 19.481 18.481 21.5 16 21.5H12C11.724 21.5 11.5 21.276 11.5 21C11.5 20.724 11.724 20.5 12 20.5H16C17.93 20.5 19.5 18.93 19.5 17V7C19.5 5.07 17.93 3.5 16 3.5H12C11.724 3.5 11.5 3.276 11.5 3C11.5 2.724 11.724 2.5 12 2.5H16C18.481 2.5 20.5 4.519 20.5 7ZM14.354 11.646L10.354 7.646C10.159 7.451 9.842 7.451 9.647 7.646C9.452 7.841 9.452 8.158 9.647 8.353L12.793 11.499H4C3.724 11.499 3.5 11.723 3.5 11.999C3.5 12.275 3.724 12.499 4 12.499H12.793L9.647 15.645C9.452 15.84 9.452 16.157 9.647 16.352C9.745 16.45 9.87301 16.498 10.001 16.498C10.129 16.498 10.257 16.449 10.355 16.352L14.355 12.352C14.549 12.158 14.549 11.842 14.354 11.646Z" fill="#fff"/>
                        </svg>
                        </button>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Header;