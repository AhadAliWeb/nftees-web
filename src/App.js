import container from "./data/container.png";
import collections from "./data/collections.png";
import connect from "./data/connect.png";
import nftees from "./data/nftees.png";
import partners from "./data/partners.png";
import rare from "./data/rare.png";
import team from "./data/team.png";
import tees from "./data/tees.png";
import ultra from "./data/ultra.png";
import medium from "./data/medium.png";
import tLogo from "./data/t-logo.png";
import twitter from "./data/twitter.png";
import twitch from "./data/twitch.png";
import Collections from "./components/Collections";
import Ultra from "./components/Ultra";
import Rare from "./components/Rare";
import Mynftees from "./components/Nftees";
import Team from "./components/Team";
import Partners from "./components/Partners";

const HandleCollections = () => {
  let subContainerTitle = document.getElementById("sub-container-title");
  subContainerTitle.innerHTML = "collections";
  let subContainer = document.getElementById("sub-container");
  subContainer.style.zIndex = "1";
  let collectionsPage = document.getElementById("collections-page");
  collectionsPage.style.display = "block";
};
const HandleUltra = () => {
  let subContainerTitle = document.getElementById("sub-container-title");
  subContainerTitle.innerHTML = "utltra exclusive";
  let subContainer = document.getElementById("sub-container");
  subContainer.style.zIndex = "1";
  let ultraPage = document.getElementById("ultra-page");
  ultraPage.style.display = "block";
};
const HandleRare = () => {
  let subContainerTitle = document.getElementById("sub-container-title");
  subContainerTitle.innerHTML = "rare edition";
  let subContainer = document.getElementById("sub-container");
  subContainer.style.zIndex = "1";
  let rarePage = document.getElementById("rare-page");
  rarePage.style.display = "block";
};
const HandleMynftees = () => {
  let subContainerTitle = document.getElementById("sub-container-title");
  subContainerTitle.innerHTML = "my nftees";
  let subContainer = document.getElementById("sub-container");
  subContainer.style.zIndex = "1";
  let rarePage = document.getElementById("mynftees-page");
  rarePage.style.display = "block";
};
const HandleTeam = () => {
  let subContainerTitle = document.getElementById("sub-container-title");
  subContainerTitle.innerHTML = "team";
  let subContainer = document.getElementById("sub-container");
  subContainer.style.zIndex = "1";
  let teamPage = document.getElementById("team-page");
  teamPage.style.display = "block";
};
const HandlePartners = () => {
  let subContainerTitle = document.getElementById("sub-container-title");
  subContainerTitle.innerHTML = "partners";
  let subContainer = document.getElementById("sub-container");
  subContainer.style.zIndex = "1";
  let partnersPage = document.getElementById("partners-page");
  partnersPage.style.display = "block";
};

function App() {
  return (
    <div className="container">
      <div className="hero">
        <img src={container} alt="" />
      </div>
      <div className="content">
        <div className="collections-highlight">
          <a href="#collections" onClick={HandleCollections}>
            <img src={collections} alt="" />
          </a>
        </div>
        <div className="team-highlight">
          <a href="#team" onClick={HandleTeam}>
            <img src={team} alt="" />
          </a>
        </div>
        <div className="tees-highlight">
          <a href="#">
            <img src={tees} alt="" />
          </a>
        </div>
        <div className="rare-highlight">
          <a href="#rare" onClick={HandleRare}>
            <img src={rare} alt="" />
          </a>
        </div>
        <div className="ultra-highlight">
          <a href="#ultra" onClick={HandleUltra}>
            <img src={ultra} alt="" />
          </a>
        </div>
        <div className="nftees-highlight">
          <a href="#mynftees" onClick={HandleMynftees}>
            <img src={nftees} alt="" />
          </a>
        </div>
        <div className="partners-highlight">
          <a href="#partners" onClick={HandlePartners}>
            <img src={partners} alt="" />
          </a>
        </div>
        <div className="connect-highlight">
          <a href="#">
            <img src={connect} alt="" />
          </a>
        </div>
        <div className="medium-highlight">
          <a href="#">
            <img src={medium} alt="" />
          </a>
        </div>
        <div className="t-highlight">
          <a href="#">
            <img src={tLogo} alt="" />
          </a>
        </div>
        <div className="twitter-highlight">
          <a href="#">
            <img src={twitter} alt="" />
          </a>
        </div>
        <div className="twitch-highlight">
          <a href="#">
            <img src={twitch} alt="" />
          </a>
        </div>
      </div>
      <div className="sub-container" id="sub-container">
        <div className="sub-container-title">
          <p id="sub-container-title"></p>
        </div>
        <div className="min-container" id="min-container">
          <div className="min-content" id="min-content">
            <div id="ultra-page" className="_page">
              <Ultra />
            </div>
            <div id="collections-page" className="_collections_page">
              <Collections />
            </div>
            <div id="rare-page" className="_page">
              <Rare />
            </div>
            <div id="mynftees-page" className="_page">
              <Mynftees />
            </div>
            <div id="team-page" className="_page">
              <Team />
            </div>
            <div id="partners-page" className="_page">
              <Partners />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
