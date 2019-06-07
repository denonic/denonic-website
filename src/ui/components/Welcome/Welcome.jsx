import React from 'react';
import Logo from '../Logo/Logo';


function Welcome() {
  return (
    <div className="welcome">
      <div className="logo-container">
        <Logo />
      </div>
      <div>
        <h1 className="welcome__title">Deno Nicaragua</h1>
        <span className="welcome__description">
            Eventos, Noticias y Artículos sobre Deno, el nuevo runtime para JavaScript y TypeScript
            escrito con Rust y V8.
        </span>
      </div>
    </div>
  );
}

export default Welcome;
