import React, { useState, useEffect } from "react";
import MyWatchList from "./MyWatchList";
import ShowList from "./ShowList";

function ShowCatalog() {
  const [watchShows, setWatchShows] = useState([]);
  const [shows, setShows] = useState([]);
  //console.log(shows);

  useEffect(() => {
    fetch("http://localhost:8081/shows")
      .then((resp) => resp.json())
      .then((data) => setShows(data));
  }, []);

  const addShowToWatch = (newWatchShow) => {
    
    //console.log(newWatchShow);

    const isOnWatchList = watchShows.some(
      (show) => show.id === newWatchShow.id
    );

    const isOnShowList = shows.some((show) => show.id === newWatchShow.id);

    if (!isOnShowList) {
      return [];
    } else if (!isOnWatchList) {
      setWatchShows((currentWatchShows) => [
        ...currentWatchShows,
        newWatchShow,
      ]);
    }
  };

  const removeWatchShow = (showToDelete) => {
    setWatchShows((currentWatchShows) =>
      currentWatchShows.filter((show) => show.id !== showToDelete.id)
    );
  };

  const handleDeleteClick = (showToDeletePermanently) => {
    console.log(showToDeletePermanently.id);
    fetch(`http://localhost:8081/shows/${showToDeletePermanently.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setShows((currentShows) =>
      currentShows.filter((show) => show.id !== showToDeletePermanently.id)
    );
    setWatchShows((currentWatchShows) =>
      currentWatchShows.filter((show) => show.id !== showToDeletePermanently.id)
    );
  };

  return (
    <>
      <MyWatchList shows={watchShows} removeWatchShow={removeWatchShow} />
      <hr />
      <ShowList
        shows={shows}
        addShowToWatch={addShowToWatch}
        onShowDelete={handleDeleteClick}
      />
    </>
  );
}

export default ShowCatalog;
