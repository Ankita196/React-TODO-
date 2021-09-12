import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "blue",
    fontWeight:"bold",
    fontSize:26
  },

  
  roots: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Todo() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={5} className={classes.root}>
        <Grid item xs={12} className={classes.paper}>
        Add your Todo here 
        </Grid>
        <Grid xs={12} className={classes.paper}>
        <Paper component="form" className={classes.roots}>
      
      <InputBase
        className={classes.input}
        placeholder="Add your Todo"
       type="text"
      />
      
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="AddIcon">
        <AddIcon  />
      </IconButton>
    </Paper>
        </Grid>
        <Grid xs={12} className={classes.paper} >
        <Paper component="form" className={classes.roots} style={{backgroundColor:"#ffe0b2"}}>
      
        <Typography style={{width:500}}>apple</Typography>
      
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} style={{margineRight:20}} >
        <DeleteIcon  />
      </IconButton>
    </Paper>
        </Grid>
        
        </Grid>

    </div>
  );
}
