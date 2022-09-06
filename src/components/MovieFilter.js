import Rating from '@mui/material/Rating';
import { Button } from 'react-bootstrap';
const MovieFilter=({setSearch,setRate,search,rate})=>{
    const handleRest=()=>{
        setSearch ('')
        setRate (0)
    }
    return(
        <>
            <input value={search} type="text" onChange={(e)=>setSearch(e.target.value)}/>
            <Rating value={rate} name="simple-controlled" onChange={(e)=>setRate(e.target.value)} />
            <Button onClick={handleRest}>Reload</Button>
        </>
    )
}

export default MovieFilter