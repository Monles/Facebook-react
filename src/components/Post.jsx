import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    card:{
        marginBottom: theme.spacing(5),
    },
    media:{
        height: 250,
        [theme.breakpoints.down("sm")]:{
            height: 150,
        },
    },
}));

const Post = () => {
  const classes = useStyles();
  return ( 
      <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1646734329499-0afb2db25fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" 
            title="My Post"
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>My First Post</Typography>
                <Typography variant='body2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac lacus convallis, ultrices urna ac, ornare massa. Nam vel mollis ligula, vitae feugiat dui. Proin ac dolor convallis velit venenatis blandit vel id ligula. Sed dolor libero, cursus et nisi in, pellentesque eleifend eros. Aliquam erat volutpat. Integer elementum tellus eu elit luctus suscipit. Proin bibendum leo in nulla dapibus, at varius libero laoreet. Nam in arcu blandit, tempor arcu non, scelerisque magna.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac lacus convallis, ultrices urna ac, ornare massa. 
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size='small' color='primary'>Share</Button>
            <Button size='small' color='primary'>Learn More</Button>
        </CardActions>
  </Card>
  );
};

export default Post;
