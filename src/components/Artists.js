import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function Artists() {
  const [Artist, getArtists] = useState([])

  const getAllArtists = () => {
      axios
      .request(options).then((response)=> {
	    console.log(response.data);
        const Artists = response.data.tracks
        return Artists;
    }).
    catch((error)=> {
	console.error(error);
    });
    
  }

  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/tracks/',
    params: {ids: '4WNcduiCmDNfmTEz7JvmLv'},
    headers: {
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
      'X-RapidAPI-Key': 'ba99b218aemsh40582a6eca745cep1642e8jsn33ab6db89c84'
    }
  };


  useEffect(() => {
    getAllArtists()
  }, [])

  return (
    <div>
      <h2>ARTIST</h2>
      
      {Artist.map(data => {
        return (
          <span key={data.id}>
            {data.name}
            <br />{" "}
          </span>
        );
      })}
      <span />
    </div>
  );
}