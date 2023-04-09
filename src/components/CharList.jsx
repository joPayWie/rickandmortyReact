import { Flex } from "@chakra-ui/react"
import { CharCard } from "./CharCard"

export const CharList = ({characters}) => {
  return (
    <Flex wrap='wrap'>
      {characters.map((char) => (
        <CharCard
          key={char.id}
          charName={char.name}
          charImg={char.image}
          charStatus={char.status}
          charGender={char.gender}
          charSpecie={char.species}
          charLocation={char.location.name}
        />
      ))}
    </Flex>
  );
};
