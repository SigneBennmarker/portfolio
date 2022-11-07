import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignItems: "stretch",
    direction: "row",
    justify: "center",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    backgroundColor: "#F7F5F1",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 470,

    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(1),
      backgroundPosition: "right bottom",
      backgroundSize: "contain",
      height: 220,
    },
  },
  pic: {
    padding: 0,
    textAlign: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    [theme.breakpoints.down("xs")]: {
      height: 270,
    },
  },
  text: {
    textAlign: "left",
    paddingLeft: "4vw",

    paddingTop: theme.spacing(8),

    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(3),
    },
  },
  paragraph: {

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}))

export default useStyles
