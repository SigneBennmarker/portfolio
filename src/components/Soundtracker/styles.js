import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(20),
        paddingTop: theme.spacing(12),

        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(2),
            padding: theme.spacing(5),
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },

        [theme.breakpoints.down("xs")]: {
            paddingTop: theme.spacing(2),
            padding: theme.spacing(2),
        },
    },
    text: {
        alignSelf: "left",
    },
}))

export default useStyles
