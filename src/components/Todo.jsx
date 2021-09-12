import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#1a237e",
    fontWeight:"bold",
    fontSize:26,
    fontFamily:"Verdana,sans-serif"
  },

  
  roots: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
    
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
  const [inputData,setInputData]=useState('');
  const [items,setItems]=useState([]);
  

  const AddItems=()=>{
    if(!inputData ){

    }
    
    else{
    setItems([...items,inputData])
    setInputData('')
  }
  }
  const deleteItem =(id) =>{
const updateditems=items.filter((element,index)=>{
  return index != id
})
setItems(updateditems)
  }

  const removeAll=()=>{
    setItems([])
  }
  return (
    <div style={{display:"block",marginTop:80}}>
      <Grid container spacing={5} className={classes.root}>
        <Grid item xs={12} className={classes.paper}>
      Todo App 
        </Grid>
        <Grid  item xs={12} className={classes.paper}>
        <Paper component="form" className={classes.roots}>
      
      <InputBase
        className={classes.input}
        placeholder="Add your Todo here"
       type="text"
       value={inputData} onChange={(e) => setInputData(e.target.value)}
      />
      
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="AddIcon">
        <AddIcon  onClick={AddItems}/>
      </IconButton>
    </Paper>
        </Grid>
         {items.map((element,index) =>{
           return(
            <Grid xs={12} className={classes.paper} >
            <Paper component="form" className={classes.roots} style={{backgroundColor:"#e8eaf6"}}>
            <Checkbox
        
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
            <Typography style={{width:500}} key={index}>{element}</Typography>
          
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton color="primary" className={classes.iconButton} style={{margineRight:20}} >
            <DeleteIcon onClick={()=>deleteItem(index)} />
          </IconButton>
        </Paper>
            </Grid>
           )
         })}

       
        <Grid item  onClick={removeAll}>
        <Button variant="contained" color="primary">
 Remove All
</Button>
        </Grid>
        
        </Grid>

    </div>
  );
}
