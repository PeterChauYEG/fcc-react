import React, { Component } from 'react';

// import styles
import './Buttons.css';

// import component
import Button from './Button';

const buttons = [
  {
    active: '#30e8bd',
    base: '#9cf4df'
  },
  {
    active: '#30c9e8',
    base: '#9ce5f4'
  },
  {
    active: '#9cc2f4',
    base: '#3080e8'
  },
  {
    active: '#a39cf4',
    base: '#4030e8'
  },    
  {
    active: '#30e8bd',
    base: '#9cf4df'
  },
  {
    active: '#30c9e8',
    base: '#9ce5f4'
  },
  {
    active: '#9cc2f4',
    base: '#3080e8'
  },
  {
    active: '#a39cf4',
    base: '#4030e8'
  }, 
  {
    active: '#30e8bd',
    base: '#9cf4df'
  },
  {
    active: '#30c9e8',
    base: '#9ce5f4'
  },
  {
    active: '#9cc2f4',
    base: '#3080e8'
  },
  {
    active: '#a39cf4',
    base: '#4030e8'
  },   
];

class Buttons extends Component {
  render() {
    return (
      <div className='Buttons'>
        {/* 
          map over buttons data and render button
        */}
        {buttons.map((button, i) => {
          const { active, base } = button;
          return (
            <Button 
              base={base}
              active={active}
              key={i}
            />  
          );
        })}  
      </div>
    );
  }
}

export default Buttons;

