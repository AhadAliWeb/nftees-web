import "../App.css";
import cThreePOne from "../data/c3p1.jpeg";
const HandleCollectionTwo = () => {
  let manWrapper = document.getElementById("main-collection-wrapper");
  manWrapper.style.display = "none";
  let collectionTwoPage = document.getElementById("collection-two-page");
  collectionTwoPage.style.display = "block";
};
const HandleCollectionThree = () => {
  let manWrapper = document.getElementById("main-collection-wrapper");
  manWrapper.style.display = "none";
  let collectionThreePage = document.getElementById("collection-three-page");
  collectionThreePage.style.display = "block";
};
function MainWrapper() {
  return (
    <div className="min-content-wrapper">
      <div className="border">
        <div className="border">
          <div className="border">
            <a href="#collection1" className="collections-heading">
              collection 1
            </a>
          </div>
        </div>
      </div>
      <p className="colllctions-details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
        dolores accusamus eum esse deleniti expedita quaerat cum, pariatur vitae
        unde hic tenetur provident eveniet cumque id recusandae quos corporis.
      </p>
      <div className="learn-more-btn">
        <div className="border">
          <div className="border">
            <div className="border">
              <a href="#learn-more" className="collections-heading learn-more">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border">
        <div className="border">
          <div className="border">
            <a
              href="#collection2"
              className="collections-heading"
              onClick={HandleCollectionTwo}
            >
              collection 2
            </a>
          </div>
        </div>
      </div>
      <p className="colllctions-details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
        dolores accusamus eum esse deleniti expedita quaerat cum, pariatur vitae
        unde hic tenetur provident eveniet cumque id recusandae quos corporis.
      </p>
      <div className="learn-more-btn">
        <div className="border">
          <div className="border">
            <div className="border">
              <a href="#collection1" className="collections-heading learn-more">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border">
        <div className="border">
          <div className="border">
            <a
              href="#collection3"
              className="collections-heading"
              onClick={HandleCollectionThree}
            >
              collection 3
            </a>
          </div>
        </div>
      </div>
      <p className="colllctions-details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
        dolores accusamus eum esse deleniti expedita quaerat cum, pariatur vitae
        unde hic tenetur provident eveniet cumque id recusandae quos corporis.
      </p>
      <div className="learn-more-btn">
        <div className="border">
          <div className="border">
            <div className="border">
              <a href="#collection1" className="collections-heading learn-more">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border">
        <div className="border">
          <div className="border">
            <a href="#collection1" className="collections-heading">
              collection 4
            </a>
          </div>
        </div>
      </div>
      <p className="colllctions-details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
        dolores accusamus eum esse deleniti expedita quaerat cum, pariatur vitae
        unde hic tenetur provident eveniet cumque id recusandae quos corporis.
      </p>
      <div className="learn-more-btn">
        <div className="border">
          <div className="border">
            <div className="border">
              <a href="#collection1" className="collections-heading learn-more">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function CollectionTwo() {
  return (
    <div className="collection-two-wrapper">
      <div className="border collection-two-btn ">
        <div className="border">
          <div className="border">
            <a href="#collection2" className="collections-heading">
              collection 2
            </a>
          </div>
        </div>
      </div>
      <p className="collections-details mb">
        / Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
        dolores accusamus eum esse deleniti expedita quaerat cum, pariatur vitae
        unde hic tenetur provident eveniet cumque id recusandae quos corporis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
        dolores accusamus eum esse deleniti expedita quaerat cum, pariatur vitae
        unde hic tenetur provident eveniet cumque id recusandae quos corporis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
        dolores accusamus eum esse deleniti expedita quaerat cum, pariatur vitae
        unde hic tenetur provident eveniet cumque id recusandae quos
        corporis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        earum dolores accusamus eum esse deleniti expedita quaerat cum, pariatur
        vitae unde hic tenetur provident eveniet cumque. /
      </p>
      <div className="team-members-c2">
        <div className="team-member"></div>
        <div className="team-member"></div>
        <div className="team-member"></div>
        <div className="team-member"></div>
      </div>
    </div>
  );
}
function CollectionThree() {
  return (
    <div className="collection-three-wrapper">
      <div className="border collection-two-btn ">
        <div className="border">
          <div className="border">
            <a href="#collection2" className="collections-heading">
              collection 3
            </a>
          </div>
        </div>
      </div>
      <p className="collections-details mb">
        / Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
        dolores accusamus eum esse deleniti expedita quaerat cum, pariatur vitae
        unde hic tenetur provident eveniet cumque id recusandae quos corporis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
        dolores accusamus eum esse deleniti expedita quaerat cum, pariatur vitae
        unde hic tenetur provident eveniet cumque id recusandae quos corporis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
        dolores accusamus eum esse deleniti expedita quaerat cum, pariatur vitae
        unde hic tenetur provident eveniet cumque id recusandae quos
        corporis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        earum dolores accusamus eum esse deleniti expedita quaerat cum, pariatur
        vitae unde hic tenetur provident eveniet cumque. /
      </p>
      <div className="team-members-c3">
        <div className="team-member c3-product  c3-product-1">
          <img src={cThreePOne} />
          <p className="c3-product-detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum
            dolores accusamus eum esse deleniti expedita quaerat cum, pariatur
            vitae unde hic tenetur provident eveniet cumque.
          </p>
          <p className="c3-product-title">tshirt_01</p>
        </div>
        <div className="team-member c3-product "></div>
        <div className="team-member c3-product "></div>
        <div className="team-member c3-product "></div>
      </div>
    </div>
  );
}
export default function Collections() {
  return (
    <div className="min-content" id="ro">
      <div id="main-collection-wrapper">
        <MainWrapper />
      </div>
      <div id="collection-two-page">
        <CollectionTwo />
      </div>
      <div id="collection-three-page">
        <CollectionThree />
      </div>
    </div>
  );
}
