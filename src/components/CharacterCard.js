import Image from "next/image";
import Link from "next/link";

const CharacterCard = ({ characters }) => {
  const character = {
    id: `1`,
    name: "Rick",
    status: "Alive",
    origin: {
      name: "Earth (C-137)",
    },
    image: "/assets/rick.jpeg",
  };
  return (
    <article className="col-span-3 bg-[#006b46] rounded-3xl p-3">
      <div className="mb-4">
        <Image
          className="rounded-t-3xl"
          src={character.image}
          width={300}
          height={300}
          alt={character.name}
        />
      </div>
      <h2 className="text-2xl mb-2">{character.name}</h2>
      <p>{character.status}</p>
      <p className="mb-4">{character.origin.name}</p>
      <Link
        className="bg-[#f6e652] flex justify-center rounded-3xl p-4 hover:bg-[#D9D9D9]"
        href={`/character/${character.id}`}
      >
        Ver más
      </Link>
    </article>
  );
};

export default CharacterCard;
