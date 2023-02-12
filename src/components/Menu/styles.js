import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "50vw",
    paddingRight: "10vw",
    alignSelf: "rignt",
    zIndex: "1000",

    backgroundColor: "#FCFBF9",
    //   position: "absolute",
    //   height: '100vh',
    //   top: 0,
    //   left:0
    justifyContent: "flex-start",
  },
  link: {
    listStyleType: "none",
    alignSelf: "rignt",
  },
}))
export default useStyles
