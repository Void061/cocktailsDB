import ListCocktails from "../../components/cocktails/list-cocktails";
import Section from '../../components/ui/section'
import { useState, useEffect } from 'react';


const FavoritesPage = (props) => {

    const [loading, setLoading] = useState(true);
    const [cocktails, setCocktails] = useState([]);



    useEffect(() => {
            const currentFav = JSON.parse(localStorage.getItem('favorites'));
            
            setCocktails([...currentFav])
            setLoading(false);

            
        
        
    },[loading])

    if(loading){
        return(             
            <Section>
                <h1>NAN</h1>
                <ListCocktails loading={true} cocktails={[1,2,3,4,5,6,]} />
            </Section>
            
        )
    }
    
    if(cocktails.length == 0 || !cocktails){
        return(
            <div className="overflow-none  flex justify-center items-center h-[80vh]">
                <h2 className="text-center text-[red] font-medium text-[20px]">0 Favorites</h2>
            </div>
        )
    }

    return(
        <Section>        
            <ListCocktails setFavorites={props.setFavorites} favorites={props.favorites}  loading={loading} cocktails={cocktails}/>
        </Section>
    )
}

export default FavoritesPage;