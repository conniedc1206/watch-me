import React from "react";
import ShowCard from "./ShowCard";

function MyWatchList({ shows, removeWatchShow }) {
  const renderShows = shows.map((show) => (
    <ShowCard key={show.id} show={show} onShowClicked={removeWatchShow}/>
  ));

  return <div className="watch-list-container">{renderShows}</div>;
}

export default MyWatchList;
