import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: "#ff0000",
    padding: theme.spacing(2),
    direction: "column",
    alignContent: "space-between",
    textAlign: "left",
    verticalAlign: "middle",
    justify: "flex-end",
    display: "flex",
    alignItems: "space-between",
  },
  links: {
    padding: theme.spacing(2),
    textAlign: "center",
    justify: "flex-end",
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
  },
}))

export default useStyles
