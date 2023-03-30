


const Avatar = (props) => {
    return(
        <div className="bg-[white] p-2 rounded-[50%]">
            <img className="max-w-[30px]" src={"/images/avatars/"+props.currentAvatar} />
        </div>
    )
}

export default Avatar;