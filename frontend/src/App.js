import React from 'react';
import './App.scss';
import Home from './containers/main/home';
import CategoryContainer from './containers/categories/category-container';
import Footer from './containers/main/footer';
import Header from './containers/main/header';

import crystal1 from './assets/Crystals/1.jpg';
import crystal2 from './assets/Crystals/2.jpg';
import crystal3 from './assets/Crystals/3.jpg';
import crystal4 from './assets/Crystals/4.jpg';
import crystal5 from './assets/Crystals/5.jpg';
import crystal6 from './assets/Crystals/6.jpg';
import crystal7 from './assets/Crystals/7.jpg';
import crystal8 from './assets/Crystals/8.jpg';
import crystal9 from './assets/Crystals/9.jpg';
import crystal10 from './assets/Crystals/10.jpg';
import crystal11 from './assets/Crystals/11.jpg';
import crystal12 from './assets/Crystals/12.jpg';
import crystal13 from './assets/Crystals/13.jpg';
import crystal14 from './assets/Crystals/14.jpg';
import crystal15 from './assets/Crystals/15.jpg';
import crystal16 from './assets/Crystals/16.jpg';

import jewlery1 from './assets/Jewlery/1.jpg';
import jewlery2 from './assets/Jewlery/2.jpg';
import jewlery3 from './assets/Jewlery/3.jpg';
import jewlery5 from './assets/Jewlery/5.jpg';
import jewlery6 from './assets/Jewlery/6.jpg';

import tapestry1 from './assets/Tapestries/1.jpg';
import tapestry2 from './assets/Tapestries/2.jpg';
import tapestry3 from './assets/Tapestries/3.jpg';
import tapestry4 from './assets/Tapestries/4.jpg';
import tapestry5 from './assets/Tapestries/5.jpg';
import tapestry6 from './assets/Tapestries/6.jpg';
import tapestry7 from './assets/Tapestries/7.jpg';
import tapestry8 from './assets/Tapestries/8.jpg';
import tapestry9 from './assets/Tapestries/9.jpg';
import tapestry10 from './assets/Tapestries/10.jpg';

import misc1 from './assets/Misc/1.jpg';
import misc2 from './assets/Misc/2.jpg';
import misc3 from './assets/Misc/3.jpg';
import misc4 from './assets/Misc/4.jpg';
import misc5 from './assets/Misc/5.jpg';
import misc6 from './assets/Misc/6.jpg';
import misc7 from './assets/Misc/7.jpg';
import misc8 from './assets/Misc/8.jpg';
import misc9 from './assets/Misc/9.jpg';

function App() {
                 
  const crystalDescription = "Vast selection of loose crystals (tumbled or raw) and " +
      "mineral specimens from thumbnail size to 2ft tall!"
  
  const crystals = [
    crystal7,
    crystal8,
    crystal6,
    crystal2,
    crystal14,
    crystal3,
    crystal4,
    crystal5,
    crystal9,
    crystal10,
    crystal11,
    crystal12,
    crystal13,
    crystal15,
    crystal16,
    crystal1,
  ];
  
  const jewleryDescription = "Beautiful natural stone bracelets, crystal necklaces, " + 
  "108 bead Malas, fillable glass window lockets, and aromatherapy jewelry"

  const jewlery =[
    jewlery2,
    jewlery3,
    jewlery5,
    jewlery1,
    jewlery6
  ];

  const tapestryDescription = "Give your pad some extra zen with our tapestries, " + 
  "singing bowls, yoga statues, crystal prisms, and inspirational banners"

  const tapestries = [
    tapestry5,
    tapestry6,
    tapestry7,
    tapestry2,
    tapestry3,
    tapestry4,
    tapestry1,
    tapestry8,
    tapestry9,
    tapestry10,
  ];

  const miscDescription = "We carry a selection of sage smudge sticks, archangel " + 
    "incense, native soul incense, and suns eye brand incense, oils, and room sprays. " + 
    "Real fossilized animals ranging from small ammonites to impressive Megalodon teeth."
  
  const misc = [
    misc1,
    misc6,
    misc2,
    misc3,
    misc4,
    misc5,
    misc7,
    misc8,
    misc9,
  ];

  return (
    <div className="page">
      <Header />
      <div className='size-holder middle'>
        <Home />
        <br />
        <br />
        <CategoryContainer 
          category="Crystals, Crystal Grids"
          images={crystals}
          description={crystalDescription}
          />
        <br />
        <br />
        <CategoryContainer 
          category="Crystal Jewlery"
          images={jewlery}
          description={jewleryDescription}
          />
        <br />
        <br />
        <CategoryContainer 
          category="Tapestries, Singing Bowls and More"
          images={tapestries}
          description={tapestryDescription}
          />
        <br />
        <br />
        <CategoryContainer 
          category="Incense Housewares And More"
          images={misc}
          description={miscDescription}
          />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
