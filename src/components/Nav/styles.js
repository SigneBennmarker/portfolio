import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: "#ff0000",
    padding: theme.spacing(2),
    
    alignContent: "space-between",
    textAlign: "right",
    verticalAlign: "middle",
    display: 'flex',
    justifyContent: "right",

  },
  links: {
    padding: theme.spacing(2),
    textAlign: "center",
    justifyContent: "left",
    alignItems: "space-around",

    alignContent: "space-between",
  },

  ul: {
    listStyle: "none",
    padding: theme.spacing(2),
    width: "45%",
    alignItems: "space-between",
    display: "flex",

    alignContent: "space-between",
    alignSelf: "left",
    margin: 0,
  },

  text: {
    padding: theme.spacing(2),
    listStyle: "none",
    width: "45%",
    alignItems: "right",
    display: "flex",

    alignContent: "space-between",
    margin: 0,
  },
  navOpt:{
    alignSelf: "right",
    alignItems: "space-between",
    alignContent: 'flex-end',


  }
}))

export default useStyles
