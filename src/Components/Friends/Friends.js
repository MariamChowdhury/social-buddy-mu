import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Friends.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Friends = (props) => {
  const {name,picture,location}=props.friendDetails
  console.log(props.friendDetails)
  const classes = useStyles();
  const style={
   margin:'80px',
   
  }
  return (
    <div>
      <div className='card-container'>
      <Card style={style} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={picture.large}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {name.first}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           From: {location.city}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="secondary">
         See Details!
        </Button>
      </CardActions>
    </Card>
      </div>
     
    </div>
  );
};

export default Friends;