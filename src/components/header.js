import React from 'react';


const Header = (props) => (
    <header>
        <h1>How well do you know dogs?</h1>
        <div className='scoreboard'>
            <p>Score:{props.scor}</p>
        </div>
    </header>
)


export default Header;
