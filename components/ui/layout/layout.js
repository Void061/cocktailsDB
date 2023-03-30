import React, { Children } from "react";
import Header from "../header/header"


const Layout = (props) => {

   
    return(
        <div>
            <Header currentAvatar={props.currentAvatar} />
            {/*props.children*/}
            {
                React.Children.map(props.children, (child) => 
                React.cloneElement(child, {setFavorites: props.setFavorites, favorites: props.favorites})
                )
            }
        </div>
    )
}

export default Layout;