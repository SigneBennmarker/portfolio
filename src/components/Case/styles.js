import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      justify: "space-between",
      alignItems: 'stretch',
      direction:"row",
      justify:"center",
      marginTop: theme.spacing(5),
      marginBottom:theme.spacing(5),
      backgroundColor: '#F4F0EC',
      ///backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
         //borderRadius: 20, 
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: 470,
      
      
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(7),
        backgroundPosition: 'bottom',
        backgroundSize: 'contain',
        height: 320,


    },

    
    },
    pic: {
      padding: 0,
      textAlign: "center",
     // borderBottomRightRadius: 20, 
      //borderTopRightRadius:20,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      
      
      
      
      [theme.breakpoints.down('xs')]: {
        height: 270,
     
    },
      
    },
    text: {
      textAlign: "left",
      paddingLeft: '4vw',

      paddingTop:theme.spacing(8),

      [theme.breakpoints.down('xs')]: {
        paddingTop: theme.spacing(3),
     
    },

    },
    paragraph:{
      [theme.breakpoints.down('xs')]: {
        display: 'none',
     
    },
    }
    
  }))

export default useStyles
