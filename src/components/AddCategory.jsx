import { useState } from 'react';
import PropTypes  from 'prop-types';

const AddCategory = ({ onAddCategory }) => {

	const [ inputValue, setInputValue ] = useState('');

	const onInputChange = e => {
		setInputValue( e.target.value );
	}

	const onSubmit = e => {
		e.preventDefault();
		if( inputValue.trim().length <= 1 ) return; 
		onAddCategory( inputValue.trim( ));
		setInputValue('');
	}
	
  return (
	<form
		onSubmit={ onSubmit }
		aria-label="form"
	>
		<input 
			type="text" 
			placeholder="Buscar Gif"
			value={ inputValue }
			onChange={ onInputChange }
		/>
	</form>
  )
}

export default AddCategory

AddCategory.propTypes = {
	onAddCategory: PropTypes.func.isRequired
}
