import { Card, Image, CardBody, Heading, Stack, Text } from "@chakra-ui/react";

export const CharCard = ({
  charName,
  charImg,
  charStatus,
  charSpecie,
  charLocation,
  charGender
}) => {

  const determineStatus = (charStatus) => {
    if (charStatus === 'Alive') {
      return 'green'
    }
    if (charStatus === 'Dead') {
      return 'red'
    } else { return 'gray'}
  }

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={charImg}
        alt={charName}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{charName}</Heading>

          <Text py="2" background={determineStatus(charStatus)}>{charStatus}</Text>

          <Text py="2">{charSpecie}</Text>

          <Text py="2">
            Last known location: {charLocation}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
};
