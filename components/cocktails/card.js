


const CocktailCard = (props) =>{

    const { name, image, favorites, setFavorites  } = props;

    console.log(1);

    function handleFavorites(){
      
        const newFavorite = {
            strDrink: name,
            strDrinkThumb: image
        }

        
        
       
        let current_favorites = favorites
      
        if(current_favorites.some((item) => item.strDrink === newFavorite.strDrink)){
            //Rimozione
            let removingFav = current_favorites.filter((item) => item.strDrink != newFavorite.strDrink);
            localStorage.setItem('favorites', JSON.stringify(removingFav));
            setFavorites([...removingFav]);
        }
        else{
            current_favorites.push(newFavorite);
            localStorage.setItem('favorites', JSON.stringify(current_favorites));
            setFavorites([...current_favorites]);
        }

        
        
        
    }

    if(props.loading || !favorites){
        return(
           
                <div  className=" animate-pulse  delay-100 bg-primary relative p-8 rounded-[10px] min-h-[300px] flex w-[300px] h-[300px]">            
                </div>
   

                
        )
    }
    return(
        <div style={{ backgroundImage: 'url('+image+')', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}} className=" relative p-8 rounded-[10px] min-h-[300px] flex w-[300px] h-[300px]">            
                <div className="absolute top-0 left-0 bottom-0 right-0 bg-[#201e1e82] rounded-[10px]"></div>
                <div className="w-full flex justify-between">
                    <p className="max-w-[130px] z-[9] text-[white] font-bold">{name}</p>
                    <div onClick={handleFavorites} className="noselect bg-[white] w-[40px] cursor-pointer h-[40px] flex justify-center items-center rounded-[50%] shadow-lg z-[9] "><svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-[20px] max-h-[20px] scale-[1]">
<path d="M20.1098 5.0965C18.8628 3.5835 17.1298 2.75049 15.2278 2.75049C14.0838 2.75049 12.9778 3.02847 11.9998 3.55847C11.0228 3.02847 9.9168 2.75049 8.7718 2.75049C6.8698 2.75049 5.13581 3.5835 3.88981 5.0965C2.53381 6.7425 1.97181 8.9905 2.38481 11.1095C3.35981 16.1055 8.4478 19.5955 10.5908 20.8635C11.0258 21.1205 11.5128 21.2495 11.9998 21.2495C12.4868 21.2495 12.9748 21.1215 13.4098 20.8635C15.5518 19.5945 20.6408 16.1055 21.6158 11.1095C22.0278 8.9905 21.4658 6.7425 20.1098 5.0965ZM20.1428 10.8225C19.2848 15.2215 14.6138 18.4075 12.6448 19.5725C12.2478 19.8085 11.7518 19.8075 11.3548 19.5725C9.38581 18.4075 4.71479 15.2215 3.85679 10.8225C3.52779 9.13851 3.9738 7.35448 5.0468 6.05048C6.0038 4.88948 7.3258 4.25049 8.7718 4.25049C9.7898 4.25049 10.7658 4.53049 11.5958 5.06049C11.8418 5.21749 12.1578 5.21749 12.4038 5.06049C13.2338 4.53049 14.2098 4.25049 15.2278 4.25049C16.6728 4.25049 17.9958 4.88948 18.9528 6.05048C20.0258 7.35448 20.4708 9.13751 20.1428 10.8225Z" fill={favorites.find((item) => item.strDrink === name) ? 'red' : 'black'}/>
</svg>
</div>
                </div>
               
            
        </div>
    )
}

export default CocktailCard;