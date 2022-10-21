import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    direction: "row",
    justify: "center",
    alignItems: "stretch",
    borderRadius: 20,
    paddingBottom: 200,
    paddingTop: "17vh",
  },
  element: {
    textAlign: "center",
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  elements: {
    marginTop: theme.spacing(5),
    textAlign: "center",
    borderRadius: 20,
    alignItems: "center",
    alignContent: "space-around",
    paddingBottom: theme.spacing(5),
    justify: "center",
  },
  item: {
    textAlign: "center",
    alignItems: "center",
    justify: "center",
    padding: 35,
  },
  icon: {
    "&:hover": {
      transform: "scale(1.1)",
      transition: "0.6s",
      transitionTimingFunction: "ease-in-out",
    },
  },
}))

export default useStyles
