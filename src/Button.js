import React, { Component } from 'react';

// import css 
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      button: false,
    };
    
    this.handleMouse = this.handleMouse.bind(this);
  }
  
  handleMouse(event) {
    this.setState({
      button: !this.state.button,
    });
    
  }
  
  render() {
    const { button } = this.state;
    const {
      base,
      active
    } = this.props;
    
    // define style
    const style = {
      background: button ? base : active
    };
    
    return (
      <div 
        className="Button" 
        onClick={this.handleMouse}        
        onMouseEnter={this.handleMouse}
        onMouseLeave={this.handleMouse}        
        style={style}  
      >
      </div>
    );
  }
}

Button.propTypes = {
  base: React.PropTypes.string.isRequired,
  active: React.PropTypes.string.isRequired
};

export default Button; 