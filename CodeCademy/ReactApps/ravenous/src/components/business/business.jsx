  import { useState } from 'react'
  import saladImage from '../../assets/salad.jpg'
  import './business.css';
  import BusinessList from '../businessList/businessList';

  export default function Business(props) {
    
    const business = props.businessObj;
    
    /*
    //skaber de variabler der holder værdierne for objekterne.
    let imageValue = saladImage;
    let nameValue = "";
    let addressValue = "";
    let cityValue = "";
    let stateValue = "";
    let zipcodeValue = "";
    let categoryValue = "";
    let ratingValue = "";
    let reviewCountValue = "";

    //et eksempel på en business. sættes som værdierne.
    imageValue = saladImage;
    nameValue = "Bennys salad bar";
    addressValue = "Hellway 34";
    cityValue = "Copenhagen";
    stateValue = "DK";
    zipcodeValue = "2200";
    categoryValue = "Danish";
    ratingValue = "4,2";
    reviewCountValue = "50";

    //her skabes et objekt som har nogle variabler som sine værdier. objektets værdier er variabler og deres værdier er defineret ovenfor.
    let BusinessObjekt = {
      image: imageValue,
      name: nameValue,
      address: addressValue,
      city: cityValue,
      state: stateValue,
      zipcode: zipcodeValue,
      category: categoryValue,
      rating: ratingValue,
      reviewCount: reviewCountValue
    }
*/
    /*her udskrives en business ud fra objektets values. de values var sat til variabler ovenfor. koden her gives css classes så det kan styles*/
    return (
      <>
        <div class="business">
          <img src={business.image || saladImage} alt="salad" />
          <p class="businessName">{business.name}</p>
          <div class="locationAndProductDiv">
            <div class="locationDiv">
              <p>{business.address}</p>
              <p>{business.city}</p>
              <p>{business.zipcode} {business.state}</p>
            </div>
            <div class="productDiv">
              <p class="businessCategory">{business.category}</p>
              <p class="businessRating">{business.rating} stars</p>
              <p>{business.reviewCount} reviews</p>
            </div>
          </div>
        </div>
      </>

    );

  }