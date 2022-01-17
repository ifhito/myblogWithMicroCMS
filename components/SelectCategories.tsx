import React, { RefObject} from 'react';
import {useRouter} from 'next/router';
type selectCategoriesType = {
    categories: any;
    category: string;
}
const SelectCategories:React.FC<selectCategoriesType> = ({categories=[], category=''}) => {
    const router = useRouter();
    const handleSetContents = (e:any)=>{
        if(e.target.value === 'all'){
          router.push('/');
        }else{
          router.push('/categories/'+e.target.value);
        }
      };
    return (
        <div className='wrapper-select'>
            <label htmlFor="category-select" className='content-color category-select-label'>カテゴリー選択：</label>
            <select id="category-select" className="category-select" value={category} onChange={handleSetContents}>
                <option value='all'>All</option>
                {categories.map((category:any) => <option key={category.id} value={category.categoryId}>{category.categoryName}</option>)}
            </select>
            <style jsx>{`
                .wrapper-select {
                    text-align: end;
                }
                .category-select-label {
                    font-size: 1.5rem;
                }
                .category-select {
                    height: 2.5rem;
                    font-size: 1.5rem;
                    background-color: transparent;
                    color: #CDDC39;
                    border: none;
                    border-bottom: 2px solid #CDDC39;
                }
                @media (max-width: 767px){
                    .wrapper-select {
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 3rem;
                    }
                    .category-select-label {
                        text-align: start;
                        font-size: 1.5rem;
                    }
                    .category-select {
                        height: 3rem;
                        font-size: 2.5rem;                        
                    }
                }
            `}</style>
        </div>
    );
};

export default SelectCategories;