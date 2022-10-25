import React from 'react';
import PropTypes from 'prop-types';


function Header( {text}) {
  return (
    <header className={{backgroundColor: 'blue'}}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.propTypes = {
    text: PropTypes.string,

}
export default Header