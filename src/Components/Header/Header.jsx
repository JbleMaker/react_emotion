/**@jsxImportSource @emotion/react */
import * as s from "./styles";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header css={s.container}>
      <h1>
        <Link to={"/react_emotion"}>HOME</Link>
      </h1>
      <ul>
        <li>
          <Link to={"/react_emotion/designer"}>DESIGNER</Link>
        </li>
        <li>
          <Link to={"/react_emotion/flower"}>FLOWER</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
