import { Avatar, Container, Divider, ImageList, ImageListItem, makeStyles, Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme=>({
  container:{
      paddingTop:theme.spacing(10),
    },
    title:{
      fontSize:16,
      fontWeight:500,
      color:"#555",
    },
    link:{
      marginRight:theme.spacing(2),
      color: "#555",
      fontSize:16,
    },
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>  
        <Typography className={classes.title}>Online Friends</Typography>
        <AvatarGroup max={6} style={{marginBottom:20}}>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
          <Avatar alt="W" src="https://material-ui.com/static/images/avatar/6.jpg" />
          <Avatar alt="Y" src="https://material-ui.com/static/images/avatar/7.jpg" />
          <Avatar alt="V" src="https://material-ui.com/static/images/avatar/8.jpg" />
        </AvatarGroup>
        <Typography className={classes.title}>Gallery</Typography>
          <ImageList rowHeight={100} style={{marginBottom:20}} cols={2}>
            <ImageListItem>
              <img src='https://v4.mui.com/static/images/image-list/breakfast.jpg' alt='' />
            </ImageListItem>
            <ImageListItem>
              <img src='https://v4.mui.com/static/images/image-list/burgers.jpg' alt='' />
            </ImageListItem>
            <ImageListItem>
              <img src='https://v4.mui.com/static/images/image-list/camera.jpg' alt='' />
            </ImageListItem>
            <ImageListItem>
              <img src='https://v4.mui.com/static/images/image-list/morning.jpg' alt='' />
            </ImageListItem>
            <ImageListItem>
              <img src='https://v4.mui.com/static/images/image-list/honey.jpg' alt='' />
            </ImageListItem>
            <ImageListItem>
              <img src='https://v4.mui.com/static/images/image-list/vegetables.jpg' alt='' />
            </ImageListItem>
          </ImageList>
          <Typography className={classes.title}>Categories</Typography>
              <Link href="#" className={classes.link} variant="body2">
              Sport
              </Link>
              <Link href="#" className={classes.link} variant="body2">
              Food
              </Link>
              <Link href="#" className={classes.link} variant="body2">
              Books
              </Link>
              <Divider flexItem style={{marginBottom:5}}/>
              <Link href="#" className={classes.link} variant="body2">
              Science
              </Link>
              <Link href="#" className={classes.link} variant="body2">
              Life
              </Link>
              <Link href="#" className={classes.link} variant="body2">
              Music
              </Link>
    </Container>
  );
};

export default Rightbar;
