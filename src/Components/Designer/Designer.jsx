import React from "react";
/**@jsxImportSource @emotion/react */
import * as s from "./styles";
import { GoArrowDownRight } from "react-icons/go";
import { IoMdMail } from "react-icons/io";
import { FaFacebookSquare, FaPhoneAlt, FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Designer(props) {
  return (
    <div css={s.container}>
      <header css={s.header}>
        <div css={s.category}>
          <span>HOME</span>
          <span>SKILLS</span>
          <span>EDUCATION</span>
          <span>PROJECTS</span>
        </div>
        <div>
          <span>CONTACTS</span>
        </div>
      </header>

      <main css={s.main}>
        <div css={s.titleContainer}>
          <span>UI/UX</span>
          <span>DESIGNER</span>
        </div>
        <div css={s.skillContainer}>
          <div>
            <h2>HARD SKILLS</h2>
            <div>
              <span>FIGMA</span>
              <span>ILLUSTRATOR BASICS</span>
              <span>WEBFLOW BASICS</span>
              <span>PRINCIPLES OF UX</span>
              <span>PROTOTYPING</span>
            </div>
          </div>

          <div>
            <h2>SOFT SKILLS</h2>
            <div>
              <span>COMMUNICATIVE</span>
              <span>EXPERIENCED IN IT-SPHERE</span>
              <span>GOODTEAM-PLAYER</span>
              <span>FAST-LEARNING</span>
            </div>
          </div>
        </div>

        <div css={s.contentTitle}>
          <h2>PROJECTS</h2>
        </div>

        <div css={s.mainContent}>
          <div>
            <div css={s.content}>
              <div>
                <img
                  src="https://cssdesignawards.com/cdasites/2025/202505/20250527070412.jpg"
                  alt=""
                />
              </div>
            </div>
            <span css={s.spanLink}>
              GO TO PRIJECT <GoArrowDownRight />
            </span>
          </div>
          <div>
            <div css={s.content}>
              <div>
                <img
                  src="https://cssdesignawards.com/cdasites/2025/202505/20250527070412.jpg"
                  alt=""
                />
              </div>
            </div>
            <span css={s.spanLink}>
              GO TO PRIJECT <GoArrowDownRight />
            </span>
          </div>
          <div>
            <div css={s.content}>
              <div>
                <img
                  src="https://cssdesignawards.com/cdasites/2025/202505/20250527070412.jpg"
                  alt=""
                />
              </div>
            </div>
            <span css={s.spanLink}>
              GO TO PRIJECT <GoArrowDownRight />
            </span>
          </div>
          <div>
            <div css={s.content}>
              <div>
                <img
                  src="https://cssdesignawards.com/cdasites/2025/202505/20250527070412.jpg"
                  alt=""
                />
              </div>
            </div>
            <span css={s.spanLink}>
              GO TO PRIJECT <GoArrowDownRight />
            </span>
          </div>
          <div>
            <div css={s.content}>
              <div>
                <img
                  src="https://cssdesignawards.com/cdasites/2025/202505/20250527070412.jpg"
                  alt=""
                />
              </div>
            </div>
            <span css={s.spanLink}>
              GO TO PRIJECT <GoArrowDownRight />
            </span>
          </div>
          <div>
            <div css={s.content}>
              <div>
                <img
                  src="https://cssdesignawards.com/cdasites/2025/202505/20250527070412.jpg"
                  alt=""
                />
              </div>
            </div>
            <span css={s.spanLink}>
              GO TO PRIJECT <GoArrowDownRight />
            </span>
          </div>
        </div>
      </main>

      <footer css={s.footerContainer}>
        <div>
          <div css={s.contact}>
            <div>
              <span>
                <FaPhoneAlt />
              </span>
              <span>+0801025389107</span>
            </div>
            <div>
              <span>
                <IoMdMail />
              </span>
              <span>jbojsun@naver.com</span>
            </div>
          </div>
        </div>
        <div css={s.snsContainer}>
          <span>
            <FaSquareInstagram />
          </span>
          <span>
            <FaFacebookSquare />
          </span>
          <span>
            <FaTwitterSquare />
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Designer;
