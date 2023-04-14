import { Flex } from "@chakra-ui/react"
import { CharCard } from "./CharCard"

export const CharList = ({ characters }) => {
  return (
    <Flex wrap='wrap' justify='center' gap='1%'>
      {characters.map((char) => (
        <CharCard
          key={char.id}
          charName={char.name}
          charImg={char.image}
          charStatus={char.status}
          charGender={char.gender}
          charSpecies={char.species}
          charLocation={char.location.name}
        />
      ))}
    </Flex>
  );
};
