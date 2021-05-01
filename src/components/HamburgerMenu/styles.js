import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
    
    root: {
      width: 200,
      display: 'flex',
      '&:focus': {
        backgroundColor: '#ff0000',
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
    paper: {
      marginRight: theme.spacing(0),
    },
    menu: {
      width: 300,
      display: 'block',
      backgroundColor: "#ff0000",
      position: "absolute", 
      height: '100vh',
      top: 0,
      left:0
    }
  }))