import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ShoppingCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, }} onClick={props.handleDrawerOpen}>
      <CardHeader/>
      <CardMedia
        component="img"
        height="300"
        image={props.image}
        alt="Paella dish"
      />
      <CardContent className="text-center">
        <Typography variant="body1" color="text.dark">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.subtitle}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" sx={{
                color: '#FFC0CB',
            }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" sx={{
                color: 'primary.main',
            }}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}