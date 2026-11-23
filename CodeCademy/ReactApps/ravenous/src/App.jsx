import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'
/*
import ImAFunctionTest from './components/funktionTest/funktionTest.jsx'
*/

import Header from './components/header/header.jsx'
import SearchBar from './components/searchBar/searchBar.jsx'

import BusinessList from './components/businessList/businessList.jsx'

//lav en hardcoded business.
const businesses = [
  {
    name: "Bennys salad bar",
    address: "Hellway 34",
    city: "Copenhagen",
    state: "DK",
    zipcode: "2200",
    category: "Danish",
    rating: "4,2",
    reviewCount: "50"
  }, 
  {
    name: "Bennys salad bar2",
    address: "Hellway 34",
    city: "Copenhagen",
    state: "DK",
    zipcode: "2200",
    category: "Danish",
    rating: "4,2",
    reviewCount: "50"
  },
  {
    name: "Bennys salad bar3",
    address: "Hellway 34",
    city: "Copenhagen",
    state: "DK",
    zipcode: "2200",
    category: "Danish",
    rating: "4,2",
    reviewCount: "50"
  },
  {
    name: "Bennys salad bar4",
    address: "Hellway 34",
    city: "Copenhagen",
    state: "DK",
    zipcode: "2200",
    category: "Danish",
    rating: "4,2",
    reviewCount: "50"
  },
  {

  },
]






//her samles alt der vises i browseren.
function App() {
  const [count, setCount] = useState(0)

  //skaber en variabel som kan opdateres. den starter med at have værdien 
  // for et tomt array.
  const [businessArrayFromSearchBar, setBusinessArrayFromSearchBar] = useState([]);

  const newBusinesses = []

  //laver en funktion. den funktion tager nye forretninger som sin parametre.
  // den function kalder så en ny funktion med parametren for de nye forretninger.
  function receiveBusinessArrayFromSearchBar(newBusinesses) {
    setBusinessArrayFromSearchBar(newBusinesses);
  }

  return (
    <>
      <Header />

      {/* laver en variabel her som hedder sendBusinessArrayToApp. 
      forventer at searchBar komponenten har det. vi vil have den skal sættes 
      ligmed den funktion vi har defineret i App.jsx's scope. her som skal være
       receiveBusinessArrayFromSearchBar. Det vil gøre at når der kommer en
       sendBusinessArrayToApp ind til App.jsx. så vil den blive sat ligmed 
       receiveBusinessArrayFromSearchBar 

       FORKLARING SKAL RETTES.
       */}
      <SearchBar sendBusinessArrayToApp={receiveBusinessArrayFromSearchBar}/>

      {/*
      <ImAFunctionTest />
      */}
      {/*giver businesslist en businesses property. altså egenskab og sætter den til business
      //som er defineret i app.jsx. Så {} kommer fra filen man skriver det i. og før = er hvad
      //den skal hedde i den nye fil.
      note: dog i tvilv om hvad det vil sige noget får en property?*/}
      <BusinessList businessesArray={businesses}/>

    </>
  )
}

// her eksporteres alt så det kan vises i browseren
export default App
















   {/* kommenteret ud da ikke bruges.*/}
   {/*
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

      */}
