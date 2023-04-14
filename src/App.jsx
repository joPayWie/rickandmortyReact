import { useState, useEffect } from "react";

import axios from "axios";

import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { CharList } from "./components/CharList";
import { PageButtons } from "./components/PageButtons";

import {
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import "./App.css";

function App() {
  // characters
  const [characters, setCharacters] = useState([]);

  // page numbers
  const [pageNumber, setPageNumber] = useState(1);
  const [maxApiPages, setMaxApiPages] = useState();

  // spinner
  const [isLoading, setIsLoading] = useState(false);

  // filters
  const [filterValues, setFilterValues] = useState({
    name: "",
    status: "",
    gender: "",
  });

  // error api
  const [error, setError] = useState(false);

  const handleFilters = (event) => {
    setFilterValues({
      ...filterValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleNameFilter = (nameValue) => {
    setFilterValues({ ...filterValues, name: nameValue });
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?name=${filterValues.name}&status=${filterValues.status}&gender=${filterValues.gender}&page=${pageNumber}`
      )
      .then(function (res) {
        setIsLoading(false);
        setError(false);
        setMaxApiPages(res.data.info.pages);
        setCharacters(res.data.results);
      })
      .catch(function (error) {
        setError(true);
        setCharacters([]);
      })
      .finally(setIsLoading(false));
  }, [pageNumber, filterValues]);

  return (
    <div className="App">
      <Header />
      <SearchBar
        handleFilters={handleFilters}
        handleNameFilter={handleNameFilter}
        filterValues={filterValues}
      />
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>There are no characters</AlertTitle>
          <AlertDescription>
            Please try another filter options.
          </AlertDescription>
        </Alert>
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <PageButtons
            maxApiPages={maxApiPages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
          <CharList characters={characters} />
          <PageButtons
            maxApiPages={maxApiPages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </>
      )}
    </div>
  );
}

export default App;
