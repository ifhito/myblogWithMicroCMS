'use client';
import React, { ChangeEvent} from 'react';
import { useRouter } from 'next/navigation';
import { CategoryType } from '../types/index';
import styles from './SelectCategories.module.css';

type selectCategoriesType = {
    categories: CategoryType[];
    category: string;
}
const SelectCategories:React.FC<selectCategoriesType> = ({categories=[], category=''}) => {
    const router = useRouter();
    const handleSetContents = (e: ChangeEvent<HTMLSelectElement>)=>{
        if(e.target.value === 'all'){
          router.push('/');
        }else{
          router.push('/categories/'+e.target.value);
        }
      };
    return (
        <div className={styles.wrapperSelect}>
            <label htmlFor="category-select" className={styles.categorySelectLabel}>カテゴリー選択：</label>
            <select id="category-select" className={styles.categorySelect} value={category} onChange={handleSetContents}>
                <option value='all'>All</option>
                {categories.map((category:CategoryType) => <option key={category.id} value={category.categoryId}>{category.categoryName}</option>)}
            </select>
        </div>
    );
};

export default SelectCategories;