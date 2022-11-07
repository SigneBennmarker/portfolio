
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  style: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      textDecoration: 'none',

    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
      textDecoration: 'none',

    },
    color: '#1D0E0E',
    fontWeight: 700,
    fontFamily: 'Public sans',
    fontSize: 36,
    textDecoration: 'none',
    paddingTop: 12,


  }
}))

export default useStyles;
