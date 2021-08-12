import Social from "components/Social";
import { MyFooter } from "./styles";

export default function Footer() {
  return (
    <MyFooter>
      <Social className="footer-social" />
      <p>All rights reserved {new Date().getFullYear()}</p>
    </MyFooter>
  );
}
