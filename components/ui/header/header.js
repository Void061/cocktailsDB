import Avatar from "./avatar";
import Link from "next/link";
import { useRouter } from 'next/router'

const Header = (props) => {

    const router = useRouter();
    function handleLogout(){
        localStorage.setItem('avatar', "");
        localStorage.setItem('username', "");
        const void_favorites = [];
        localStorage.setItem('favorites', JSON.stringify(void_favorites))
        router.reload();
    }
    return(
        <div className="bg-primary">
            <div className="max-w-[1200px] p-4 mx-auto">
               <div className="flex justify-between">

               <div className="flex-1 flex gap-4 items-center">
                        <Link href="/category/Ordinary%20Drink">
                            <button className="outline-none">
                            <svg className="w-[24px] h-[24px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.978 7.31544L14.978 3.29403C13.252 1.90655 10.748 1.90655 9.022 3.29403L4.022 7.31544C2.896 8.22075 2.25 9.5682 2.25 11.0127V17.0068C2.25 19.6237 4.381 21.7534 7 21.7534H9.75V17.0068C9.75 15.7684 10.759 14.76 12 14.76C13.241 14.76 14.25 15.7684 14.25 17.0068V21.7534H17C19.619 21.7534 21.75 19.6247 21.75 17.0068V11.0127C21.75 9.5682 21.104 8.22075 19.978 7.31544ZM20.25 17.0068C20.25 18.7964 18.792 20.2529 17 20.2529H15.75V17.0068C15.75 14.9411 14.068 13.2594 12 13.2594C9.932 13.2594 8.25 14.9411 8.25 17.0068V20.2529H7C5.208 20.2529 3.75 18.7964 3.75 17.0068V11.0127C3.75 10.0254 4.191 9.10406 4.961 8.48485L9.961 4.46344C11.143 3.51411 12.857 3.51411 14.038 4.46344L19.038 8.48485C19.808 9.10406 20.249 10.0254 20.249 11.0127V17.0068H20.25Z" fill="#fff"/>
                            </svg>
                            </button>
                        </Link>

                        <Link href="/favorites">
                            <button className="outline-none">
                            <svg className="w-[24px] h-[24px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M20.1098 5.0965C18.8628 3.5835 17.1298 2.75049 15.2278 2.75049C14.0838 2.75049 12.9778 3.02847 11.9998 3.55847C11.0228 3.02847 9.9168 2.75049 8.7718 2.75049C6.8698 2.75049 5.13581 3.5835 3.88981 5.0965C2.53381 6.7425 1.97181 8.9905 2.38481 11.1095C3.35981 16.1055 8.4478 19.5955 10.5908 20.8635C11.0258 21.1205 11.5128 21.2495 11.9998 21.2495C12.4868 21.2495 12.9748 21.1215 13.4098 20.8635C15.5518 19.5945 20.6408 16.1055 21.6158 11.1095C22.0278 8.9905 21.4658 6.7425 20.1098 5.0965ZM20.1428 10.8225C19.2848 15.2215 14.6138 18.4075 12.6448 19.5725C12.2478 19.8085 11.7518 19.8075 11.3548 19.5725C9.38581 18.4075 4.71479 15.2215 3.85679 10.8225C3.52779 9.13851 3.9738 7.35448 5.0468 6.05048C6.0038 4.88948 7.3258 4.25049 8.7718 4.25049C9.7898 4.25049 10.7658 4.53049 11.5958 5.06049C11.8418 5.21749 12.1578 5.21749 12.4038 5.06049C13.2338 4.53049 14.2098 4.25049 15.2278 4.25049C16.6728 4.25049 17.9958 4.88948 18.9528 6.05048C20.0258 7.35448 20.4708 9.13751 20.1428 10.8225Z" fill="white" />
                            </svg>
                            </button>
                        </Link>
                    </div>

                    <div className="flex-1 flex justify-end gap-4">
                        <Avatar currentAvatar={props.currentAvatar}/>
                        <button onClick={handleLogout}>
                        <svg className="w-[24px] h-[24px]" width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
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