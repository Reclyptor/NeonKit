import Card from "~/components/Card";
import Button from "~/components/Button";
import { flicker } from "~/styles/keyframes.css.ts";

const Header = () => {
  return (
    <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "1rem", fontWeight: 700, animation: `${ flicker } 2.5s infinite ease-in-out` }}>
      <span>{ "〔" }</span>
      <span>{ "SIMULATION OVERRIDE READY" }</span>
      <span>{ "〕" }</span>
    </span>
  );
};

const Footer = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "end", columnGap: "0.25rem" }}>
      <Button variant="primary" style={{ width: "80px" }}>Override</Button>
      <Button variant="secondary" style={{ width: "80px" }}>Abort</Button>
    </div>
  );
};

const Content = () => {
  return (
    <div style={{ margin: "2rem .5rem 1rem" }}>
      <span style={{ fontWeight: 200, opacity: "50%" }}>
        &gt;&gt; Override simulation parameters?
      </span>
    </div>
  );
};

export default () => (
  <Card header={ <Header /> } children={ <Content /> } footer={ <Footer /> } />
);