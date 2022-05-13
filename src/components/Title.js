const Title = ({ handleFlavourChange, flavour }) => {
  return <h1 onChange={handleFlavourChange}>{flavour}</h1>;
};
export default Title;