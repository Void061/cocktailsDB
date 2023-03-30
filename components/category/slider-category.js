import Link from 'next/link';
import { encodeCategory } from '../../utils/api';

const SliderCategory = (props) => {
         
    
    return(
        <div className="">
            <ul className="flex justify-center flex-wrap gap-4">
                {props.categories.map((item, index) => (
                    <Link href={'/category/'+ encodeCategory(item.strCategory)} key={index}>
                        <li className="text-[20px] font-semibold px-6 cursor-pointer rounded-[25px] text-primary bg-secondary" >{item.strCategory}</li>
                    </Link>                   
                ))}
            </ul>
            
        </div>
    )
}

export default SliderCategory;