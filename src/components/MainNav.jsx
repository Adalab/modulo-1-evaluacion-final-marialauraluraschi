// Fichero src/components/Logo.js (nuevo código)

const MainNav = () => {
  return (
    <div className='main_nav' id='main_nav'>
      <h3>¡Prepáralos con tu marca favorita!</h3>
      <h2>Vuelta al cole</h2>
      <ul className='products'>
        <li className='backp'>
          <figure>
            <img src='./assets/images/mochilas.png' alt='mochilas' />
            <figcaption>Mochilas escolares</figcaption>
          </figure>
        </li>
        <li className='case'>
          <figure>
            <img src='./assets/images/estuches.png' alt='estuches' />
            <figcaption>Estuches</figcaption>
          </figure>
        </li>
        <li className='bag'>
          <figure>
            <img src='./assets/images/bolsas.png' alt='bolsas de deportes' />
            <figcaption>Bolsas de deportes</figcaption>
          </figure>
        </li>
      </ul>
      <button className='start' type='button'>
        Empezar ahora
      </button>
    </div>
  );
};

export default MainNav;
