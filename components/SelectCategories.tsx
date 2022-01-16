import React, { RefObject} from 'react';

type selectCategoriesType = {
    categories: any;
    category: string;
    handleSetContents: (e:any) => void;
}
const SelectCategories:React.FC<selectCategoriesType> = ({categories=[], category='', handleSetContents}) => (
    <div className='wrapper-select'>
        <select className="category-select" value={category} onChange={handleSetContents}>
            <option value='all'>All</option>
            {categories.contents.map((category:any) => <option key={category.id} value={category.categoryId}>{category.categoryName}</option>)}
        </select>
        <style jsx>{`
            .wrapper-select {
                text-align: end;
            }
            @media (max-width: 767px){
            .category-select {
                width: 100%;
                height: 3rem;
                font-size: 2rem;
            }
            }
        `}</style>
    </div>
    
    
);

export default SelectCategories;