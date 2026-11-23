import {useState} from 'react';

import Business from '../business/business';

import './businessList.css';

//BusinessList(props): vi siger at når businesslist eksporteres så skal den sende props med. props defineres her.
//const businesses: her laver vi en variabel der skal sættes ligmed business propertien 
//for business list.
export default function BusinessList(props) {
    const businesses = props.businessesArray;

    const numberRenderedValue = 0;

    {/*her skrives alle businesses ud til app.jsx som så kan sende det til browseren. den får business fra business.jsx*/}
    return(
        <>
            {/*businesses: vi tager vores nydefinerede businesses variabel? 
            businessProp: en variabel vi skaber og sætter ligmed en placeholder værdi. som skal indeholde værdien for vores objekt
            businessObj: et businessObjekt vi skaber her?
            businessProp.name: vi bruger navnet som det der skal identificere nøglen på hver seperat business der renderes?
            */}
            <div class="businessList">
            {businesses.map((businessProp, numberRenderedValue) => {
                return <Business key={businessProp.name} businessObj={businessProp}/>
            })}
            </div>
        </>
    );

}
