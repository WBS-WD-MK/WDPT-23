import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main, { Feed, Dashboard } from './components/Main/';
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Feed />
        <Dashboard />
      </main>
      <Main />
      <Footer />
    </>
  );
};

export default App;
