//importer useState hook værktøjet fra react
import { useEffect, useState } from "react";

import './searchBar.css';

//definer en SearchBar component som ekporteres med 2 parametre.
export default function SearchBar(searchRequests, selectedLocation) {

        //vi definerer andre options som ikke kan skrives ind.
    const [location, setLocation] = useState("");
    const [terms, setTerms] = useState("");

    //SKAL ÆNDRE USESTATE TIL DYNAMISK SENERE.
    const [sortBy,setSortBy] = useState("best_match");
    const [limit, setLimit] = useState("3");
 
//definer et objekt som kan sendes som parametre til API fetch requesten. Den skal have method givet
//fordi det har api kald altid.
const options = {
    //angiver at man gerne vil hente noget fra API'en. Så hvad modtageren skal gøre med ens forspørgsel
    method: 'GET',
    
    //her angives overskrifterne på det man vil have pakket ind i sin forespørgsel.
    headers: {

        //her angiver man hvilken dataformat man vil modtage fra serveren. Typisk er det JSON. 
        accept: 'application/json',

        //her hentes en nøgle fra en git ignoreret .env fil. Den indeholder nøglen til API kaldet.
        authorization: `Bearer ${import.meta.env.VITE_YELP_API_KEY}`,
      }
    //indhold. ekstra ikke vist, men som retuneres ved API kaldet. det findes i body som JSON filen er i.
};


    //definer typer af sortering. skrives som strings for at forhindre space fejl.
    const sortByOptions = {
        "Best Match": "best_match", 
        "Highest Review": "review",
        "Review Count": "review_count",
        "Shortest Distance": "distance"
    }

    //object.keys: vi kalder keys methoden på objects objektet indbygget i javascript. Den viser alle keys i
    // vores objekt på en liste. 
    // (sortByOptions): Derefter indsætter vi vores objekt som metoden "keys"skal køre på.
    //"keys" metoden retunerer en array med kun keysne til et objekt. her sortByOptions


    //.map(): kører en funktion man selv definerer på hvert element i en array.
    //sortByOptionsKey: er vores variabel som vi skal bruge i .map.
    //=> {}: vi kalder en anonym funktion.
    //<li key=...: for hver plads i sort by options laver vi et list element i html. 
    //sortByOptions[sortByOptionsKey]: vi siger dens nøgle skal være vores objekt sorbyoptionss key. det skal være list items key
    //<>{sortByOptionsKey}<>: her siger vi så at værdien for den key altså keys tilhørende value pair. Skal være det der står som tekst i html.
    //dens key. Derfor vil koden nedenfor retunere for plads 0 <li key="best_match">Best Match</li>
    //læring her. man kan åbenbart ikek sende en console.log kommandfo ind. det skal åbenbart være wrapped i en function som den modtager. forstår
    //ikke hvorfor det er nødvendigt.

    //key er her den specifikke ting vi kigger efter her. i vores tilfælde er det sortByværdier. så vi kalder den nuværendesortBy for hver element i array.
    //sortBy===currentSoryBy. her laver vi en conditional der siger at hvis de 2 er ligmed hinanden så skal den få classen "listItemValgt". hvis ikke
    //skal den have classen "". 
    //onClick: her gør vi at når der trykkes på et pågældende element så skal sortBy værdien sættes til currentSortBy. dermed ændres classen og dermed css.
    const jsxSortByOptions = Object.keys(sortByOptions).map((sortByOptionsKey) => {
        const currentSortBy = sortByOptions[sortByOptionsKey]
        return (
            <li 
            key={currentSortBy} 
            className={sortBy===currentSortBy ? "listItemValgt" : "listItemIkkeValgt"}
            onClick={() => {
                    console.log("i was pressed");
                    console.log(sortBy);
                    setSortBy(currentSortBy);  
                    console.log(sortBy);
                }
            } 
            >{sortByOptionsKey}</li>
        )
    })


/*
    useEffect(() => {
let businessSearchFieldValue = getElementById()
        /*
            let businessSearchFieldValue = getElementById("businessSearchField").value
            let locationSearchFieldValue = getElementById("locationSearchField").value
            addEventListener(businessSearchFieldValue) 

        }, []
    );
    */
/*
    function test() {
        let businessSearchFieldValue = getElementById("businessSearchField").value;
        let locationSearchFieldValue = getElementById("locationSearchField").value;
        console.log(businessSearchFieldValue);
        console.log(locationSearchFieldValue);
    }
    */

    // dataFromAPI: vi laver en variable der skal gemme resultatet vi senere får fra en api i sig.
const dataFromAPI = [];

//fetch: her bruger man window.fetch() metoden fra Promise objektet window. vi angiver at vi har en række options
//altså betingelser for api kaldet.vi skriver dem med destrucuring. ``$
//.then: vi angiver at når api kaldet har modtaget noget så skal den gøre noget andet.
// response: vores fetch giver noget retur. vi laver en variabel vi vil gemme det i og vi vælger eksempelvis at kalde den response.
// json: vi angiver af vi gerne vil have retuneret det som et javascript objekt?
// dataFromAPI: vi laver en variabel som json versionen af vores modtagede code fra apien skal gemmes i. vi skriver det til consollen.
// err: her bruges catch (antager det er en window metode? altså window.catch) gætter på den prøver at fange fejl. hvis den fanger noget
//vil vi gemme det i en variabel vi eksempelvis kalder err (for error) 
// conosole.error: så skriver det som en fejl i consollen. med .error metoden på consol objektet

function searchWithAPI() {
    fetch(`https://api.yelp.com/v3/businesses/search?location=${location}&term=${terms}&sort_by=${sortBy}&limit=${limit}`, options)
        .then(response => response.json())
            .then(dataFromAPI => console.log(dataFromAPI))
                .catch(err => console.error(err));
}

//event: det vi modtager når der senere kører et click event som vores funktion skal køre udfra.
//.preventDefault: tror overflødig her men bruges for at forhindre at hvis man har html <form> som det er dækket i. så skal den ikke submitte noget. god vane.
//skriver derefter vores variabler fra før ind her for at vise at bruger input er registreret.
function handlerDisplayRanMessage(event) {
    event.preventDefault();
    console.log(`Searching Yelp with ${terms}, ${location}, ${sortBy}`);
}

function logSearchAndSearchWithAPI(event) {
    handlerDisplayRanMessage(event);
    searchWithAPI();
}

    return(
        <>
            <div>{dataFromAPI}</div>
            <div className="searchBar">
                <div>
                    <div className="listItems">
                        {jsxSortByOptions}
                    </div>
                    <div>
                        <input type="text" placeholder="Search businesses" id="termsInputField" 
                        value={terms} 
                        onChange={(event) => {
                                setTerms(event.target.value);
                            }
                        }/>
                        <input type="text" placeholder="Location" id="locationInputField" 
                        value={location}
                        onChange={(event) => {
                            setLocation(event.target.value);
                        }}/>
                    </div>
                    <div>
                        {/*man skal skrive onClick og ikke onclick i react. 
                        derudover skal man skrive det med {} tegn rundt om og ikke med en string
                        som man typisk gør ved html*/}
                        {/* funktioner man skriver her ved f.eks. onclick, kaldes ikke før der klikkes når man 
                        fjerne paranteser. men hvis man skriver paranteser efter kaldes den automatisk en gang. */}
                        <button className="searchButton" onClick={logSearchAndSearchWithAPI} >Search</button>
                        {/*<button className="searchButton" onClick={searchWithAPI} >Search</button>*/}
                    </div>
                </div>
            </div>
        </>
    );
}




// det orignlae api kald der gives af yelp
//fetch(`https://api.yelp.com/v3/businesses/search?location=copenhagen&term=food&sort_by=best_match&limit=3`, options)