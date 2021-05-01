import { makeStyles } from "@material-ui/core/styles"
import transitions from "@material-ui/core/styles/transitions"


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0),
    marginTop: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5),
   
  },

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

  },
  pic: {
    padding: theme.spacing(2),

  },
  text: {
    paddingLeft: '13vw',
    paddingRight:'13vw',

    [theme.breakpoints.down('sm')]: {
      paddingLeft: '5vw',
      paddingRight:'5vw',
   
  },
    textDecoration: 'none',
    '&:hover': {
      transform: 'scale(1.05)',
      transition: '0.6s',
      transitionTimingFunction: 'ease'
   },
    

  },
  link: {
   textDecoration: 'none'
      
  }
}))

export default useStyles
