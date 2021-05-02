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
    padding: theme.spacing(),
    listStyle: "none",
    width: "45%",
    display: "flex",
    alignItems: "right",

    paddingTop: theme.spacing(4),
    alignContent: "space-between",
    margin: 0,
  },
  navOpt:{
    alignSelf: "right",
    alignItems: "space-between",
    alignContent: 'flex-end',


  },
  logo: {
    paddingTop: theme.spacing(4),
    listStyle: "none",
    width: "45%",
    alignItems: "right",
    display: "flex",
    padding:theme.spacing(2),
    alignContent: "space-between",
    margin: 0,
    [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(15),


  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(10),


  },  }

}))

export default useStyles
