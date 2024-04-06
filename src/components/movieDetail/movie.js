import React ,{ useEffect,useState} from "react";
import "./movie.css";
import {useParams} from "react-router-dom";
const Movie = () =>{
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()
    useEffect(() =>{
        getData()
        window.scrollTo(0,0)
    },[])
    const getData =() =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }
    return(
        <div className="movie">
            <div className="movie_intro">
                <img className="movie_backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path:""}`} alt=""/>
            </div>
            <div className="movie_detail">
               <div className="movie_detailLeft">
               <div className="movie_posterbox">
                 <img className="movie_poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path:""}`} alt=""/>
                </div>
               </div>
               <div className="movie_detailRight">
                <div className="movie_detailRightTop">
                    <div className="movie_name"> 
                     {
                        currentMovieDetail
                        ?
                        currentMovieDetail.original_title
                        :
                        " "
                     }
                    </div>
                    <div className="movie_tagline"> 
                    {
                        currentMovieDetail
                        ?
                        currentMovieDetail.tagline
                        :
                        " "
                     }
                    </div>
                    <div className="movie-rating">
                    {
                        currentMovieDetail
                        ?
                        currentMovieDetail.vote_average
                        :
                        " "
                     } <i className="fas fa-star"/>
                     <span className="movie_voteCount">
                     {
                        currentMovieDetail
                        ?
                        "("
                        +
                        currentMovieDetail.vote_count
                        +
                        ") votes"
                        :
                        " "
                     }
                     </span>
                    </div>
                    <div className="movie-runtime">
                    {
                        currentMovieDetail
                        ?
                        currentMovieDetail.runtime 
                        +
                        " mins"
                        :
                        " "
                     }
                    </div>
                    <div className="movie_releaseDate">
                    {
                        currentMovieDetail
                        ?
                        "Release Date: " 
                        +
                        currentMovieDetail.release_date
                        :
                        " "
                     }
                    </div>
                    <div className="movie_genres">
                    {
                        currentMovieDetail && currentMovieDetail.genres 
                        ? 
                        currentMovieDetail.genres.map(genre =>(
                            <> <span className="movie_genre" id={genre.id}>{genre.name}</span></>
                        ))
                        :
                        " "
                     }
                    </div>
                </div>
                <div className="movie_detailRightBottom">
                    <div className="synopsisText"> Synopsis</div>
                    <div>{
                        currentMovieDetail ? currentMovieDetail.overview: ""
                        }</div>               
                </div>     
               </div>
            </div>
            <div className="movie_links">
                <div className="movie_heading">USEFUL LINKS</div> 
                 {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration:"none"}}> <p><span className="movie_homeButton movie_Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a> 
                 }
                 {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imbd.com/title/" + currentMovieDetail.imbd_id} target="_blank" style={{textDecoration:"none"}}> <p><span className="movie_imdbButton movie_Button">IMBD <i className="newTab fas fa-external-link-alt"></i></span></p></a>   
                 }
            </div>
            <div className="movie_heading">Production Companies </div>
            <div className="movie_production">
             {
                currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                 <>
                 {
                    company.logo_path
                    &&
                    <span className="productionCompanyImage">
                        <img className="movie_productionCompany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt=""/>                        <span>{company.name}</span>
                    </span>
                 }
                 </>
                ))
             }
            </div>
        </div>
    )
}
export default Movie