import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './Dropdown.css';

const useStyles = makeStyles({
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: 'white',
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
      position: "relative"
    },
    checkedIcon: {
      backgroundColor: 'rgb(254,189,17);',
      '&:before': {
        display: 'block',
        width: 7,
        height: 3,
        background: "rgba(206,217,224,0)",
        border: "2px solid #fff",
        borderRight: "none",
        borderTop: "none",
        top: 4,
        left: 4,
        position: "absolute",
        transform: "rotate(-45deg)",
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3',
      },
    },
  });
  
  // Inspired by blueprintjs
  function StyledRadio(props) {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

class Dropdown extends React.Component {

    changeValue(e, value){
        this.props.onChange(value);
    }

    render(){
        console.log(this.props.value);
        return (
            <div className={(this.props.active ? "dropdown active" : "dropdown")}>
                <FormControl className="dropdown-container" component="fieldset">
                    <strong className="dropdown-title">Veldu upphæð:</strong>
                    <RadioGroup defaultValue={this.props.value} aria-label="gender" name="customized-radios" onChange={this.changeValue.bind(this)}>
                        <FormControlLabel value="25000000" control={<StyledRadio />} label="25.000.000 kr" />
                        <FormControlLabel value="30000000" control={<StyledRadio />} label="30.000.000 kr" />
                        <FormControlLabel value="35000000" control={<StyledRadio />} label="35.000.000 kr" />
                    </RadioGroup>
                </FormControl>
            </div>
          );
    }  
}

export default Dropdown;
