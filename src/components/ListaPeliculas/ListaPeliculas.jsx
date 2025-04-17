import Card from "../Card/Card";

const ListaPeliculas = ({tipo, peliculas}) => {
    
    const contadorGenero = peliculas.reduce((lista, pelicula) => {
        lista[pelicula.genre] = (lista[pelicula.genre] || 0)+1;
        console.log(lista)
        return lista;
    }, {});
    return (
        <div>
            <h1>{tipo}</h1>
            {Object.keys(contadorGenero).map((genero) => {
                return (
                <h4 key={genero}>{genero}: {contadorGenero[genero]}</h4>
                );
            })}
            <div className="movie-list">
                {peliculas.length > 0 ?(
                    peliculas.map((pelicula, index) => {
                        return (
                            <Card
                                key={index}
                                title={pelicula.title}
                                image={pelicula.image}
                                director={pelicula.director}
                                year={pelicula.year}
                                genre={pelicula.genre}
                                rating={pelicula.rating}
                                type={pelicula.type}
                            />
                        )
                    })
                ):(
                    <p>No movies found...</p>
                )}
            </div>
        </div>
    );
};

export default ListaPeliculas;