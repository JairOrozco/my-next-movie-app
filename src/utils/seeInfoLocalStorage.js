export const seeInfoLocalStorage = () => {

    const item = JSON.parse( localStorage.getItem('liked_movies') );
    
    let movies;

    if (item) {
        movies = item;
    } else {
        movies = {};
    }

    return movies;
}

export const handleLocalStorageInfo = ( id, poster_path, title ) => {

    // trayendo y guaradando información que hay en localStorage
    const infoLocalStorage = seeInfoLocalStorage();

    if( infoLocalStorage[id] ) { 
        infoLocalStorage[id] = localStorage.removeItem(`${id}`); //Si hay una propiedad en el objeto que el local Storage devuelve que coincida con el id de la pelicula entonces será eliminada.
    } else {

        // const imagen = `${URL_IMAGES_W300}${poster_path}` 

        const movieItem = { 
            id, 
            poster_path, 
            title 
        }

        infoLocalStorage[id] = movieItem

    }

    localStorage.setItem('liked_movies', JSON.stringify( infoLocalStorage ) )
}




