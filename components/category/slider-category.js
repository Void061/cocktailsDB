import Link from 'next/link';
import { encodeCategory } from '../../utils/api';

const SliderCategory = (props) => {
         const { loading, currentCat } = props
    function handleChangeCat(cat){
        props.setLoading(true);
        props.setCurrentCat(cat)
        setTimeout(() => {
            props.setLoading(false);
        }, 800)
    }

    if(loading){
        return(
            <div className="">
            <ul className="flex justify-center flex-wrap gap-4">
                {props.categories.map((item, index) => (
                   
                    <li key={index} className="transition-all text-[20px] font-semibold px-6 cursor-pointer rounded-[25px] text-secondary bg-secondary animate-pulse delay-100" >Cocktail cat</li>                 
                ))}
            </ul>
            
        </div>
        )
    }
    return(
        <div className="">
            <ul className="flex justify-center flex-wrap gap-4">
                {props.categories.map((item, index) => (
                   
                    currentCat != item.strCategory ?
                    <Link onClick={() => handleChangeCat(encodeCategory(item.strCategory))} href={'/category/'+ encodeCategory(item.strCategory)} key={index} scroll={false}>
                        <li className="transition-all hover:bg-primary hover:text-secondary text-[20px] font-semibold px-6 cursor-pointer rounded-[25px] text-primary bg-secondary" >{item.strCategory}</li>
                        
                    </Link> :
                    <li key={index} className="transition-all text-[20px] font-semibold px-6 cursor-pointer rounded-[25px] text-secondary bg-primary" >{item.strCategory}</li>                 
                ))}
            </ul>
            
        </div>
    )
}

export default SliderCategory;