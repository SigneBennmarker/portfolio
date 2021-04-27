
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    style: {
        [theme.breakpoints.down('sm')]: {
        fontSize: 20          
    },
        color: '#1D0E0E',
        fontWeight: 700,
        fontFamily: 'Public sans', 
        fontSize: 42,
        textDecoration: 'none',

    }}))
  
    export default useStyles;
  