import React, { useEffect, useState } from "react";
import getOneApi from "../api/getOneApi";
import { useLocation } from "react-router-dom";

const ArtistMore = () => {
  const location = useLocation().pathname;
  const id = location.slice(12);

  const [music, setMusic] = useState([]);
  const retreiveMusic = async () => {
    const response = await getOneApi(id);
    setMusic(response);
  };
  // console.log(music)
  useEffect(() => {
    retreiveMusic();
  }, []);
  console.log(music);
  return (
    <div>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="d-flex flex-row">
            <div className="col-md-4 image-container">
              <img src={music.image} className="card-img" alt="hanuman" />
              <div className="play-icon"></div>
            </div>
            <div className="col-md-8 bg-dark text-white">
              <div className="card-body ">
                <h5 className="card-title">{music.title}</h5>
                <p className="card-text">{music.description}</p>
                <p className="card-text">{music.content}</p>
                <p className="card-text">{music.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar fixed-bottom navbar-light bg-dark">
        <div className="container-fluid nav justify-content-center">
          <audio controls className="audio-element">
            <source src={require('../songs/mj.mp3')} type="audio/mpeg"/>
            Your browser does not support the audio element.
          </audio>
        </div>
      </nav>
    </div>
  );
};
export default ArtistMore;
