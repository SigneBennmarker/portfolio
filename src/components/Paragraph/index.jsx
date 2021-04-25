import React from 'react';
import useStyles from './styles'

const Paragraph = ({value}) => {
const classes = useStyles();
return (
  
<p className={classes.style}>{value}</p>


)

}

export default Paragraph;
