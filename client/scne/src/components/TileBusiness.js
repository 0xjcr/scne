import IconButton from '@mui/material/Button';
import StraightIcon from '@mui/icons-material/Straight';


const TileBusiness = ({id, name, upvotes, handleUpvote, ranking }) => {
  return (
    <div>
      <div></div>
      <div className='tile'>
        <div>{ranking}</div>
        <h2>{name}</h2>
        <div className="upvoteButtonOuter"><IconButton size="large" onClick={() => handleUpvote(id)}>
          <StraightIcon />
          {upvotes}
        </IconButton></div>
      </div>
    </div>
  )
}

export default TileBusiness