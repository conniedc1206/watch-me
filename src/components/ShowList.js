import React from "react";
import ShowCard from "./ShowCard";

function ShowList({ shows, addShowToWatch, onShowDelete }) {
  


  const renderShows = shows.map((show) => (
    <ShowCard
      key={show.id}
      show={show}
      onShowClicked={addShowToWatch}
      onShowDelete={onShowDelete}
    />
  ));

  return <div className="show-container">{renderShows}</div>;
}

export default ShowList;
