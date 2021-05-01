import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: "#ff0000",
    padding: theme.spacing(2),
    direction: "column",
    alignContent: 'space-between',
    textAlign: 'left',
    verticalAlign: 'middle',
   
    display: 'flex',
    alignItems: 'space-between',
    justifyContent: 'flex-end',



  },
  links: {
    paddingLeft: theme.spacing(3),
    textAlign: "center",
    justify: 'flex-end',
    alignItems: 'space-around',

    alignContent: 'space-between',


    
  },

  ul: {
  listStyle: 'none',
  padding: theme.spacing(0),
  alignItems: 'center',
  display: 'flex',
  alignContent: 'flex-end',
  justifyContent: 'left',
  margin: 0,
  


},

  text: {
    padding: theme.spacing(2),
  },


}))

export default useStyles
