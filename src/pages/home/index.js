import React,{ useState} from 'react';
 import Header from '../../componenets/header/Header';
 import TabOptions from '../../componenets/tabOptions/tabOptions';
import Footer from '../../componenets/common/Footer/Footer';
import Delivery from "../../componenets/Delivery/Delivery";
import DiningOut from '../../componenets/DiningOut/DiningOut';
import Nightlife from '../../componenets/Nightlife/Nightlife';


const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;

    case "Dining Out":
      return <DiningOut />;

    case "Nightlife":
      return <Nightlife />;

    default:
      return  <Delivery />;
  }
};
export default HomePage;