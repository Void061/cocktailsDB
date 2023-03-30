import Card from './card';

const ListCocktails = (props) => {
    const { cocktails } = props;

    
 
    return(
        <div>
            <div className={props.loading ? "flex-wrap gap-12 hidden justify-center" : "flex-wrap gap-12 flex justify-center" }>
                {cocktails.map((item, index) => (
                <Card key={index} image={item.strDrinkThumb} name={item.strDrink}/>
                ))}
            
            </div>
            
            {
                props.loading ?
                 <div className={"flex-wrap gap-12 flex justify-center" }>
                 {cocktails.map((item, index) => (
                     <Card loading={props.loading} key={index} image={item.strDrinkThumb} name={item.strDrink}/>
                     ))  }
                   

                 </div>
           : null }
          
        </div>

        
    )
}



export default ListCocktails;