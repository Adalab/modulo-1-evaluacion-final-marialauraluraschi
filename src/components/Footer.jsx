const Footer = () => {
  return (
    <div className='footer'>
      <a href='./index.html#header'>
        {' '}
        <img className='up' src='./assets/images/ico-arrow.svg' alt='up' />
      </a>

      <div className='more'>
        <nav className='footer_nav'>
          <ul>
            <li>
              <a href='https://adalab.es/'>zapatillas</a>{' '}
            </li>
            <li>
              <a href='https://adalab.es/'>ropa</a>{' '}
            </li>
            <li>
              <a href='https://adalab.es/'>niño/a</a>{' '}
            </li>
            <li>
              <a href='https://adalab.es/'>destacados</a>{' '}
            </li>
            <li>
              <a href='https://adalab.es/'>tips</a>{' '}
            </li>
          </ul>
          <ul className='rrss'>
            <li>
              <a href='https://adalab.es/'>Twitter</a>{' '}
            </li>
            <li>
              <a href='https://adalab.es/'>Instagram</a>{' '}
            </li>
            <li>
              <a href='https://adalab.es/'>Youtube</a>{' '}
            </li>
          </ul>
        </nav>
        <ul className='copy'>
          <li>©2023</li>
          <li>
            we <span className='heart'>&#9829</span> run
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
