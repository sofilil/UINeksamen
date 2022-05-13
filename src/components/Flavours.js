const flavour = [
  { id: 1, title: "strawberry", value: "jordbær" },
  { id: 2, title: "banana", value: "Banan" },
  { id: 3, title: "lime", value: "lime" },
  { id: 4, title: "blueberry", value: "blåbær" },
  { id: 5, title: "chocolate", value: "sjokolade" }
];

export default function Flavours({ handleFlavourChange }) {
  return (
    <>
      <select
        defaultValue="chocolate"
        id="flavour"
        data-testid="flavour"
        onChange={handleFlavourChange}
      >
        {flavour.map((flavourName) => (
          <option key={flavourName.id} title={flavourName.title}>
            {flavourName.title}
          </option>
        ))}
      </select>
    </>
  );
}

  