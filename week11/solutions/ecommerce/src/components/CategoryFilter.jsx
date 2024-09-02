import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const CategoryFilter = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => {
        const updatedCategories = data.map((category) => ({
          name: category,
          link: `/categories/${category}`,
        }));
        setCategories(updatedCategories);
      });
  }, []);
  return (
    <div className='join'>
      <NavLink to={'/'} className={({ isActive }) => (isActive ? 'btn btn-accent' : 'btn')}>
        All
      </NavLink>
      {categories.map((category) => (
        <NavLink
          key={category.name}
          to={category.link}
          className={({ isActive }) => (isActive ? 'btn btn-accent' : 'btn')}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryFilter;
