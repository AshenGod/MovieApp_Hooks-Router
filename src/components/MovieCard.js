// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Rating from '@mui/material/Rating';
// import ReactReadMoreReadLess from "react-read-more-read-less";
// import { Link, NavLink } from 'react-router-dom';
// const MovieCard=({movieDate,movie})=>{
//     return(
//         <Card style={{ width: '14rem' }}>
//         <Card.Img variant="top" src= {movie.posterURL} />
//         <Card.Body>
//           <Card.Title>{movie.title}</Card.Title>
//           {/* <Card.Text>
                
//                      <ReactReadMoreReadLess
//                         charLimit={40}
//                         readMoreText={"Show More"}
//                         readLessText={"Show Less"}
//                     >
//                         {movie.description}
//                     </ReactReadMoreReadLess>
//                     </Card.Text> */}
//                     <Rating name="read-only" value={movie.rating} readOnly />
//                     <br/>
//           <Link to='/MovieTrailer'>
//           <Button variant="primary">More Info</Button>
//           </Link>
          
//         </Card.Body>
//       </Card>

//     );
// }
// export default MovieCard

import { Card ,Button } from "react-bootstrap"
import Rating from '@mui/material/Rating';
import ReactReadMoreReadLess from "react-read-more-read-less";
import {Link} from 'react-router-dom'


const MovieCard = ({movieDate,movie}) => {
    
  
    return (
        <>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterURL} style={{height :'390px'}} />
      <Card.Body>
        <Link to={`/MovieTrailer/${movie.id}`}><Card.Title>{movie.title}</Card.Title></Link>
        <Card.Text>
        <ReactReadMoreReadLess
                charLimit={40}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
                {movie.description}
            </ReactReadMoreReadLess>
          
        </Card.Text>
        <Rating name="read-only" value={movie.rating} readOnly />
        <br/>
      </Card.Body>
    </Card>

        </>




    )
    }
export default MovieCard