import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(20), 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: theme.spacing(8),

    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(4),
      padding: theme.spacing(8),
     
    },

    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
      padding: theme.spacing(2),
    },
  },
  gridroot: {
  },
  text: {
    alignSelf: 'flex-start'
  }, 
  pic: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(10),
    padding: theme.spacing(3),
  }

}))

export default useStyles
