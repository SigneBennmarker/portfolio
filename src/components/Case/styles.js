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
      marginTop: 50,
      marginBottom:50,
      

    
    },
    pic: {
      padding: 0,
      textAlign: "center",
      borderBottomRightRadius: 20, 
      borderTopRightRadius:20,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '90%',
      height: 370,
      
    },
    text: {
      textAlign: "left",
      alignItems: "center",
      justify:"center",
      paddingTop: 100,

    },
  }))

export default useStyles
