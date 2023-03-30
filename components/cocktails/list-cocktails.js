import Card from './card';

const ListCocktails = (props) => {
    const { cocktails } = props;
    return(
        <div className="flex-wrap gap-12 flex justify-center">
            {cocktails.map((item) => (
                <Card key={item.idDrink} image={item.strDrinkThumb} name={item.strDrink}/>
            ))}
            
        </div>
    )
}



export default ListCocktails;