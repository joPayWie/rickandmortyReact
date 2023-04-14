import { IconButton, Text, Flex } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export const PageButtons = ({ pageNumber, setPageNumber, maxApiPages }) => {
  return (
    <Flex justify="center" align="center">
      <IconButton
        isDisabled={pageNumber === 1 ? true : false}
        icon={<ArrowLeftIcon />}
        colorScheme="blue"
        margin="1%"
        onClick={() => {
          setPageNumber(pageNumber - 1);
        }}
      />
      <Text
        fontSize="1.25rem"
        fontWeight="bold"
        borderRadius="30px"
        background="#e6e6e6"
        padding="0px 11px"
        color="black"
      >
        {pageNumber}
      </Text>
      <IconButton
        isDisabled={pageNumber === maxApiPages ? true : false}
        icon={<ArrowRightIcon />}
        colorScheme="blue"
        margin="1%"
        onClick={() => {
          setPageNumber(pageNumber + 1);
        }}
      />
    </Flex>
  );
};
