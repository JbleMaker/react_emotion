/**@jsxImportSource @emotion/react */
import { FaArrowRightLong, FaFacebookF, FaInstagram } from "react-icons/fa6";
import * as s from "./styles";
import { FaTwitter } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

function Flower(props) {
  return (
    <>
      <header css={s.header}>
        <h1>FLEUR</h1>
        <div css={s.menu}>
          <span>COLLECTIONS</span>
          <span>ABOUT</span>
          <span>CONTACT</span>
          <div>
            <button css={s.shopButton}>SHOP</button>
          </div>
        </div>
      </header>

      <main css={s.mainContainer}>
        <div>
          <div css={s.mainTitle}>
            <h1>Custom Dried Flower Bouquets</h1>
            <h2>Free delivery on orders over $79</h2>
            <button>SHOP</button>
          </div>
        </div>
        <div css={s.mainBottom}>
          <div css={s.icons}>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaFacebookF />
            </span>
            <span>
              <BiWorld />
            </span>
          </div>
          <div css={s.mainLink}>
            <span>DRIED PAMPAS COLLECTION</span>
            <span>
              <FaArrowRightLong />
            </span>
          </div>
        </div>
      </main>

      <main css={s.ourServices}>
        <div>
          <div css={s.ourServiceTitle}>
            <span>THIS IS WHAT WE DO</span>
            <span>Our Services</span>
          </div>
        </div>

        <div css={s.productContainer}>
          <div css={s.productBox}>
            <div>
              <img
                css={s.productImg}
                src="https://beautynury.com/data/editor/sSBf9f4tE2o.jpg"
                alt=""
              />
            </div>
            <div css={s.productContents}>
              <h1>Custom Bouquets</h1>
              <div>
                <span>Do you have an acquired taste? From </span>
                <span>your favourite flowers to the rarest </span>
                <span>hidden secrets, we have what you need.</span>
              </div>
              <button>READ MORE</button>
            </div>
          </div>

          <div css={s.productBox}>
            <div>
              <img
                css={s.productImg}
                src="https://beautynury.com/data/editor/sSBf9f4tE2o.jpg"
                alt=""
              />
            </div>
            <div css={s.productContents}>
              <h1>Occasion Flowers</h1>
              <div>
                <span>Favourite flowers for your special day or</span>
                <span>the perfect decoration for your next</span>
                <span>business event.</span>
              </div>
              <span>READ MORE</span>
            </div>
          </div>

          <div css={s.productBox}>
            <div>
              <img
                css={s.productImg}
                src="https://beautynury.com/data/editor/sSBf9f4tE2o.jpg"
                alt=""
              />
            </div>
            <div css={s.productContents}>
              <h1>Premade Bouquets</h1>
              <div>
                <span>Our florists are passionate about</span>
                <span>creating the most beautiful</span>
                <span>combinations of selected dried flowers.</span>
              </div>
              <span>READ MORE</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Flower;
