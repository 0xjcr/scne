import Button from '@mui/material/Button';

const TileBusiness = ({id, name, upvotes, handleUpvote}) => {
  return (
    <div>
       <div>
       <h2>{name}</h2>
       <Button onClick={() => handleUpvote(id)}>Upvote ({upvotes})</Button>
        </div> 
    </div>
  )
}

export default TileBusiness