
import {useParams} from "react-router-dom";




const MovieTrailer=({movieDate})=>{
    const { Info } = useParams();
    const x = movieDate.find(el => el.id === +Info);
    
    return(
        <div className="desc">
          <br/>
          <h1>{x.title}</h1>
          <br/>
        <img src={x.posterURL} alt='aa' style={{width : '60%', marginLeft : '20%'}}/>
        <h3 id="Description">Description</h3>
        <h4 id="INFO">{x.description}</h4>
        <br/>
        {/* <iframe width="560" height="315" src={x.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <iframe width="520" height="300" src={x.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      */}

<iframe width="560" height="315" src={x.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
         
        </div>
        )
}

export default MovieTrailer