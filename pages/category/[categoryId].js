import { getAllCategories, getCocktailsByCategory, decodeCategory } from '../../utils/api';
import SliderCategory from '../../components/category/slider-category'
import Section from '../../components/ui/section';
import ListCocktails from '../../components/cocktails/list-cocktails';
import { useState, useEffect } from 'react';
const CategoryPage = (props) => {

    const [loading, setLoading] = useState(props.loading);
    const [currentCat, setCurrentCat] = useState();
    

    
    
    

   useEffect(() => {
       if(props.currentCat && !currentCat){
           setTimeout(() => {
                setCurrentCat(props.currentCat);
           }, 500)
           
           
       }
   },[currentCat])


    if(!props.categorie || props.categorie.length === 0 || !currentCat){
        return(
            <div>
                <Section>
                <SliderCategory setCurrentCat={setCurrentCat} currentCat={currentCat} setLoading={setLoading} loading={true} categories={[1,2,3,4,5,6,7,8,9,10,11]} />
            </Section>
            
               
            <Section>
                <ListCocktails loading={true} cocktails={[1,2,3,4,5,6,7,8,9,10,11,12,13]}/>
            </Section>
            </div>
        )
    }

    return(
        <div>
            
           
            <Section>
                <SliderCategory setCurrentCat={setCurrentCat} currentCat={currentCat} setLoading={setLoading} categories={props.categorie} />
            </Section>
            
               
            <Section>
                <ListCocktails setFavorites={props.setFavorites} favorites={props.favorites}  loading={loading} cocktails={props.cocktails}/>
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
    
    const categorie = await getAllCategories();
    const drinks = await getCocktailsByCategory(categoryId);

    try{
    
    return{
        props:{
            categorie: categorie,
            cocktails: drinks,
            loading: false,
            currentCat: decodeCategory(categoryId),
        },
        revalidate: 10,
    }

}
catch(e){
    return{
        notFound: true,
    }
}


    
}

export default CategoryPage;