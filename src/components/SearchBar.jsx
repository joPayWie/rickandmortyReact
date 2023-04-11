import { useState } from "react";

import {
  Flex,
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
  Select,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const SearchBar = ({
  handleFilters,
  handleNameFilter,
  filterValues,
}) => {
  const [nameValue, setNameValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    handleNameFilter(nameValue)
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Flex margin="2%">
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Search by name"
            name="name"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            autoComplete="off"
          />
          <InputRightElement width="4.5rem">
            <IconButton
              type='submit'
              h="1.75rem"
              size="sm"
              icon={<Search2Icon />}
              colorScheme="blue"
            ></IconButton>
          </InputRightElement>
        </InputGroup>
        <Select
          name="status"
          value={filterValues.status}
          onChange={(e) => {
            handleFilters(e);
            }
          }
        >
          <option value="">Status - All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </Select>
        <Select
          name="gender"
          value={filterValues.gender}
          onChange={(e) => {
            handleFilters(e);
            }
          }
        >
          <option value="">Gender - All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </Select>
      </Flex>
    </form>
  );
};
