import { useState, useEffect } from "react";

import axios from "axios";

import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { CharList } from "./components/CharList";

import { IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons";

import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [maxApiPages, setMaxApiPages] = useState()
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .then(function (res) {
        setMaxApiPages(res.data.info.pages)
        setCharacters(res.data.results);
      });
  }, [pageNumber]);

  // const addPage = () => {
  //   if (pageNumber )
  // }

  // const subtractPage

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <IconButton
        disabled={pageNumber === 1 ? true : false}
        icon={<ArrowLeftIcon />}
        colorScheme="blue"
        onClick={() => {
          console.log(pageNumber)
          setPageNumber(pageNumber - 1)
          console.log(pageNumber)
        } }
      />
      <IconButton
        disabled={pageNumber === maxApiPages ? true : false}
        icon={<ArrowRightIcon />}
        colorScheme="blue"
        onClick={() => {
          console.log(pageNumber)
          setPageNumber(pageNumber + 1)
          console.log(pageNumber)
        }
        }
      />
      <CharList characters={characters} />
      <IconButton
        disabled={pageNumber === 1 ? true : false}
        icon={<ArrowLeftIcon />}
        colorScheme="blue"
        onClick={() => setPageNumber(pageNumber - 1)}
      />
      <IconButton
        disabled={pageNumber === 1 ? true : false}
        icon={<ArrowRightIcon />}
        colorScheme="blue"
        onClick={() => setPageNumber(pageNumber + 1)}
      />
    </div>
  );
}

export default App;
