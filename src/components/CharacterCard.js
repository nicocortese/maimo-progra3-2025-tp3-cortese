import Image from "next/image";
import Link from "next/link";

const CharacterCard = ({ character }) => {
  return (
    <article className="col-span-3 bg-[#a6eee6ff] rounded-3xl flex flex-col drop-shadow-[0_0_200px_rgba(217,217,217,0.2)]">
      <div className="flex justify-center ">
        <Image
          className="rounded-t-3xl"
          src={character.image}
          width={300}
          height={300}
          alt={character.name}
        />
      </div>
      <div className="flex flex-col flex-grow p-4 text-[#1d1e26]">
        <div className="min-h-16">
        <h2 className="text-2xl text-center font-bold">{character.name}</h2>
        </div>
        <div className="flex-grow flex flex-col justify-center">
        <p className= "w-full text-center">
          <span className="font-semibold">Status:</span> {character.status}
        </p>
        <p className="w-full text-center">
          <span className="font-semibold">Origin:</span> {character.origin.name}
        </p>
      </div>
      </div>
      <Link
        className="mt-auto bg-[#fae48bff] w-full text-center text-[20px] rounded-b-3xl p-4 hover:bg-[#d9d9d9]"
        href={`/character/${character.id}`}
      >
        Ver más
      </Link>
    </article>
  );
};

export default CharacterCard;
