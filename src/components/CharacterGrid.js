import CharacterCard from "@/components/CharacterCard";

const CharacterGrid = ({ characters }) => {
  return (
    <div className="grid grid-cols-12 gap-5 max-w-[1200px] mx-auto my-0">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterGrid;
