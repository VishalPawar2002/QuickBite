import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

const StyledIconButton = styled(IconButton)(({ liked }) => ({
  color: liked ? 'red' : 'white',
  transition: 'color 0.2s ease',
  position: 'absolute',
  top: '8px',
  right: '8px',
  backgroundColor: 'transparent',
  border: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&:focus': {
    outline: 'none',
  },
}));

export default function Menu() {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState('');
  const [liked, setLiked] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className='mt-36'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="194"
          image="https://images.pexels.com/photos/959926/pexels-photo-959926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Paella dish"
        />
        <StyledIconButton onClick={handleLikeClick} liked={liked}>
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </StyledIconButton>
      </Box>
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Select
          value={selectedOption}
          onChange={handleChange}
          displayEmpty
          fullWidth
          sx={{ marginLeft: 1 }} // Add margin to separate it from the expand button
        >
          <MenuItem value="" disabled>Select an option</MenuItem>
          <MenuItem value="option1">1</MenuItem>
          <MenuItem value="option2">2</MenuItem>
          <MenuItem value="option3">3</MenuItem>
          <MenuItem value="option4">4</MenuItem>
        </Select>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* Additional content can go here */}
        </CardContent>
      </Collapse>
    </Card>
  );
}