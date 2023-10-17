import '../styles/App.scss';
import Header from './Header';
import MainArt from './MainArt';
import MainNav from './MainNav';
import Footer from './Footer';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <article>
          <MainArt />
        </article>
        <nav>
          <MainNav />
        </nav>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default App;
