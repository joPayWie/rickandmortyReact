import {
  Flex,
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
  Select,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const SearchBar = () => {
  return (
    <form>
      <Flex>
        <InputGroup size="md">
          <Input pr="4.5rem" type="text" placeholder="Search by name" />
          <InputRightElement width="4.5rem">
            <IconButton
              h="1.75rem"
              size="sm"
              icon={<Search2Icon />}
            ></IconButton>
          </InputRightElement>
        </InputGroup>
        <Select>
          <option value="all">Status - All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </Select>
        <Select>
          <option value="all">Gender - All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </Select>
      </Flex>
    </form>
  );
};
