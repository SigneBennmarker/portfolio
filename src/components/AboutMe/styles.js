import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      justify: "space-around",
      alignItems: 'stretch',
      direction:"row",
      justify:"center",
      alignItems: "stretch",
      borderRadius: 20, 
      backgroundColor: '#E6E9F3',
      height: 370,
      paddingTop: 30,
    
      

    
    },
    pic: {
      padding: 0,
      textAlign: "center",
      borderBottomRightRadius: 20, 
      borderTopRightRadius:20,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: 370,
      [theme.breakpoints.up("xs")]: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(5)
      },
      
    },
    text: {
      textAlign: "left",
      alignItems: "center",
      justify:"center",
      padding: 35,
      paddingeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      

    },
  }))

export default useStyles
