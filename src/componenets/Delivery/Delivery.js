import React from 'react';
import {restaurant} from "../../data/restaurants"
import "./Delivery.css"
import Filters from '../common/Filters/Filters';
import DeliveryCollections from "../Delivery/DeliveryCollections/DeliveryCollections";
import TopBrands from './DeliveryCollections/TopBrands/TopBrands';
import ExploreSection from '../common/ExploreSection/ExploreSection';


const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];
const restaurantsList = restaurant;

const Delivery = () => {
  return (
    <div>
    <div className='max-width'>
      <Filters filtersList={deliveryFilters} />
      </div>
      <DeliveryCollections/>
      <TopBrands />
      <ExploreSection
       list={restaurantsList} collectionName="Delivery Restaurants in Bangalore"
      />
    </div>
  );
};

export default Delivery;
