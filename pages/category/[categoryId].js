import { getAllCategories, getCocktailsByCategory, decodeCategory } from '../../utils/api';
import SliderCategory from '../../components/category/slider-category'
import Section from '../../components/ui/section';
import ListCocktails from '../../components/cocktails/list-cocktails';
const CategoryPage = (props) => {

    


    if(!props.categorie || props.categorie.length === 0){
        return(
            <p>Loading...</p>
        )
    }

    return(
        <div>
           
            <Section>
                <SliderCategory categories={props.categorie} />
            </Section>

            <Section>
                <ListCocktails cocktails={props.cocktails}/>
            </Section>
        </div>
    )
}




export async function getStaticPaths(context){
    const categorie = await getAllCategories();
    
    const paths = categorie.map((categoria) => (
        { params: { categoryId: categoria.strCategory }}
    ))

    return {
        paths: paths,
        fallback: true,
    }
}

export async function getStaticProps(context){
    const { params } = context;
    
    let categoryId = decodeCategory(params.categoryId);
    console.log(categoryId);
    const categorie = await getAllCategories();
    const drinks = await getCocktailsByCategory(categoryId);

    
    return{
        props:{
            categorie: categorie,
            cocktails: drinks,
        },
        revalidate: 10,
    }


    
}

export default CategoryPage;