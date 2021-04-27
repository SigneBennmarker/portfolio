import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justify: "space-around",
    alignItems: "stretch",
    direction: "row",
    justify: "center",
    alignItems: "stretch",
    borderRadius: 20,
    backgroundColor: "#E6E9F3",
  },
  element: {
    textAlign: "center",
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    //   backgroundPosition: 'center',
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    backgroundColor: "#ffff00",
  },
  elements: {
    textAlign: "center",
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,

    //   backgroundPosition: 'center',
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    backgroundColor: "#0000ff",
    padding: theme.spacing(4),
    justify: "center",
  },
  item: {
    textAlign: "center",
    alignItems: "center",
    justify: "center",
    padding: 35,
      },
}))

export default useStyles
