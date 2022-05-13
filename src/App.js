import { useState } from "react";

import Layout from "./components/Layout";

export default function App() {
  // TODO: Gjør nødvendige endringer slik at 'Chocolate' vise i tittel når applikasjonen starter

  const [flavour, setFlavour] = useState("chocolate");

  const [css, setCss] = useState({});

  // TODO: Trigg funksjonen under ved endring i select
  const handleFlavourChange = (event) => {
    const { value } = event.target;
    // TODO: Gjør nødvendig endring slik at tittel blir oppdatert med verdien valgt i select

    setFlavour(event.target.value);
    // #### DO NOT CHANGE -- Ikke gjør endringer på koden under
    const cssFlavour = getComputedStyle(
      document.documentElement
    ).getPropertyValue(`--${value}`);
    const cssBackground = getComputedStyle(
      document.documentElement
    ).getPropertyValue(`--bg-${value}`);
    document.documentElement.style.setProperty("--flavour", `${cssFlavour}`);
    document.documentElement.style.setProperty("--bg", `${cssBackground}`);
    setCss(value);
    // #### DO NOT CHANGE END
  };

  // TODO: Gjør om til komponenter. HINT: Se på testid navnene som matcher krav til komponenter
  return (
    <>
      <Layout
        className="layout"
        data-testid="layout"
        handleFlavourChange={handleFlavourChange}
        flavour={flavour}
        css={css}
      />
    </>
  );
}