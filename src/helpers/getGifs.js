const getGifs = async (category) => {
	const key = 'dKChRIMb7MzIttOr5td8X7u19iUr9XHI';
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=10`;

	const resp = await fetch( url );
	const { data } = await resp.json();    
	
	const gifs = data.map( img => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url
	}));

	return gifs;
}

export default getGifs;