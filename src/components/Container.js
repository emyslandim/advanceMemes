import React, { useContext, useEffect, useState } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  const [queryChange, setQueryChange] = useState(true);

  useEffect(() => {
    if(queryChange !== searchTerm){
      runSearch(searchTerm);
      setQueryChange(searchTerm);
    }
  }, [runSearch, searchTerm, queryChange]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;
