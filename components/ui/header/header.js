import Avatar from "./avatar";



const Header = (props) => {
    return(
        <div className="bg-primary">
            <div className="max-w-[1200px] p-4 mx-auto">
               <div className="flex">
                    <div className="flex-1 flex justify-end">
                        <Avatar />
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Header;