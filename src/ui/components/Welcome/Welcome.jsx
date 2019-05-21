import React from 'react';
import Logo from '../Logo/Logo';


function Welcome() {
  return (
    <div className="welcome">
      <Logo />
      <div>
        <h1 className="welcome__title">Deno Nicaragua</h1>
        <span className="welcome__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquid ex ea commodi consequat.
        </span>
      </div>
    </div>
  );
}

export default Welcome;
