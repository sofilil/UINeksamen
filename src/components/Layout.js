import IceCream from "./IceCream";
import Flavours from "./Flavours";
import Title from "./Title";

const Layout = ({ handleFlavourChange, flavour }) => {
  return (
    <div className="layout" data-testid="layout">
      <section id="options" data-testid="options">
        <Title handleFlavourChange={handleFlavourChange} flavour={flavour} />
        <div className="option" data-testid="flavours" id="flavours">
          <label htmlFor="flavour">
            <Flavours handleFlavourChange={handleFlavourChange} />
          </label>
        </div>
      </section>
      <main>
        <IceCream
          className="ice-cream"
          data-testid="ice-cream"
          handleFlavourChange={handleFlavourChange}
        />
      </main>
    </div>
  );
};

export default Layout;