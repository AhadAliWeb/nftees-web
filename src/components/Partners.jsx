import "../App.css";
import uman from "../data/uman-removebg-preview.png";
import clokkyWorky from "../data/clokkyworky-removebg-preview.png";
import partner1 from "../data/tees-partner.jpeg";
import partner2 from "../data/tees-partners.jpeg";
const HandlePartnersUman = () => {
  let mainWrapper = document.getElementById("main-wrapper");
  mainWrapper.style.display = "none";
  let partnersUmanPage = document.getElementById("partners-uman-page");
  partnersUmanPage.style.display = "block";
};
const HandleTeensOnAcid = () => {
  let mainWrapper = document.getElementById("main-wrapper");
  mainWrapper.style.display = "none";
  let teensonAcidPage = document.getElementById("teenson-acid-page");
  teensonAcidPage.style.display = "block";
};
const HandleClokkyWorky = () => {
  let mainWrapper = document.getElementById("main-wrapper");
  mainWrapper.style.display = "none";
  let clokkyWorkyPage = document.getElementById("clokky-worky-page");
  clokkyWorkyPage.style.display = "block";
};
function MainWrapper() {
  return (
    <div className="partners-list">
      <div className="border">
        <div className="border">
          <div className="border">
            <a
              href="#partners/uman"
              className="uman-partner"
              onClick={HandlePartnersUman}
            >
              uman
            </a>
          </div>
        </div>
      </div>
      <div className="partner-list-1">
        <img src={uman} />
      </div>
      <div className="partner-list-2">
        <img className="tees-partner" src={partner1} />
        <img className="tees-partner" src={partner2} />
        <img className="crokky" src={clokkyWorky} />
      </div>
      <div className="bottom-btns">
        <div className="border">
          <div className="border">
            <div className="border">
              <a
                href="#partners/teens-on-acid"
                className="tees-partner-btn teens-on-acid"
                onClick={HandleTeensOnAcid}
              >
                teens on acid
              </a>
            </div>
          </div>
        </div>
        <div className="border">
          <div className="border">
            <div className="border">
              <a
                href="#partners/clokkyworky"
                className="tees-partner-btn clokky-worky "
                onClick={HandleClokkyWorky}
              >
                clokkyWorky
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function PartnersUman() {
  return (
    <div className="partners-uman">
      <div className="border">
        <div className="border">
          <div className="border">
            <a href="#partners/uman" className="uman-partner">
              uman
            </a>
          </div>
        </div>
      </div>
      <div className="partner-list-1">
        <img src={uman} />
      </div>
      <div className="partners-uman-details">
        / Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
        dolores accusamus eum esse deleniti expedita quaerat cum, pariatur vitae
        unde hic tenetur provident eveniet cumque id recusandae quos corporis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
        dolores accusamus eum esse deleniti expedita quaerat cum, pariatur vitae
        unde hic tenetur provident eveniet cumque id recusandae quos corporis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
        dolores accusamus eum esse deleniti expedita quaerat cum, pariatur vitae
        unde hic tenetur provident eveniet cumque id recusandae quos
        corporis.Lorem ipsum dolor sit amet. /
      </div>
      <p className="partners-ending-title">check out collab</p>
    </div>
  );
}
function TeensonAcid() {
  return (
    <div className="partners-teens-wrapper">
      <div className="border ml-5 mb-2">
        <div className="border">
          <div className="border">
            <a
              href="#partners/uman"
              className="uman-partner"
              onClick={HandlePartnersUman}
            >
              teens on acid
            </a>
          </div>
        </div>
      </div>
      <div className="partner-list-2 partners-teens">
        <img className="tees-partner" src={partner1} />
        <img className="tees-partner" src={partner2} />
        <p className="lh-1">
          / Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
          dolores accusamus eum esse deleniti expedita quaerat cum, pariatur
          vitae unde hic tenetur provident eveniet cumque id recusandae quos
          corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Error earum dolores accusamus eum esse deleniti expedita quaerat cum,
          pariatur vitae unde hic tenetur provident eveniet cumque id recusandae
          quos corporis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Error earum dolores accusamus eum esse deleniti expedita quaerat
          cum, pariatur vitae unde hic tenetur provident eveniet cumque id
          recusandae quos corporis.Lorem ipsum dolor sit amet. /
        </p>
      </div>
    </div>
  );
}
function ClokkyWorky() {
  return (
    <div className="clokky-worky-page">
      <div className="clokky-worky-details">
        <p className="lh-1">
          / Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
          dolores accusamus eum esse deleniti expedita quaerat cum, pariatur
          vitae unde hic tenetur provident eveniet cumque id recusandae quos
          corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Error earum dolores accusamus eum esse deleniti expedita quaerat cum,
          pariatur vitae unde hic tenetur provident eveniet cumque id recusandae
          quos corporis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Error earum dolores accusamus eum esse deleniti expedita quaerat
          cum, pariatur vitae unde hic tenetur provident eveniet cumque id
          recusandae quos corporis.Lorem ipsum dolor sit amet. /
        </p>
      </div>
      <div>
        <div className="border">
          <div className="border">
            <div className="border">
              <a
                href="#partners/uman"
                className="uman-partner"
                onClick={HandlePartnersUman}
              >
                clokkyworky
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={clokkyWorky} />
        </div>
      </div>
    </div>
  );
}
export default function Partners() {
  return (
    <div>
      <div className="min-content" id="main-wrapper">
        <MainWrapper />
      </div>
      <div id="partners-uman-page">
        <PartnersUman />
      </div>
      <div id="teenson-acid-page">
        <TeensonAcid />
      </div>
      <div id="clokky-worky-page">
        <ClokkyWorky />
      </div>
    </div>
  );
}
