import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  root: {
    color: "#ff0000",
    padding: theme.spacing(5),
    direction: "column",


  },
  pic: {
    padding: theme.spacing(0),

  },
  text: {
    padding: theme.spacing(5),

  },
}))

export default useStyles
