import Header from "../header/header"


const Layout = (props) => {
    return(
        <div>
            <Header currentAvatar={props.currentAvatar} />
            {props.children}
        </div>
    )
}

export default Layout;