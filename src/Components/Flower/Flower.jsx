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
    </>
  );
}

export default Flower;
