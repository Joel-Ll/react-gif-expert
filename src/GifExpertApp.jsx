
import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

	const [ categories, setCategories ] = useState([]);

	const onAddCategory = newCategory => {
		if( categories.includes( newCategory )) return;

		setCategories([ newCategory, ...categories ]);
	};

  return (
	<>
		<h1>GiffExpertApp</h1>
		
		<AddCategory 
			// setCategories={ setCategories }
			onAddCategory={ onAddCategory }
		/>

		{
			categories.map( category => (
				<GifGrid 
					key={ category }
					category={ category }  
				/>
			))
		}
	</>
  )
}

export default GifExpertApp;
