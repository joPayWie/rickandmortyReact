import {
  Card,
  Image,
  CardBody,
  Heading,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";

export const CharCard = ({
  charName,
  charImg,
  charStatus,
  charSpecies,
  charLocation,
}) => {
  const determineStatus = (charStatus) => {
    if (charStatus === "Alive") {
      return "#047500";
    }
    if (charStatus === "Dead") {
      return "#b31200";
    } else {
      return "#636363";
    }
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      maxW="400px"
      minW={{ md: "400px", sm: "300px" }}
      background="#e6e6e6"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={charImg}
        alt={charName}
      />

      <Stack>
        <CardBody>
          <Heading size="md" marginBottom="3%">
            {charName}
          </Heading>
          <Box background={determineStatus(charStatus)} borderRadius="10px">
            <Text py="2" color="white" fontSize=".75rem">
              {charStatus}/{charSpecies}
            </Text>
          </Box>

          <Text py="2">Last known location:</Text>
          <Text fontStyle="italic" fontWeight="bold">
            {charLocation}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
};
