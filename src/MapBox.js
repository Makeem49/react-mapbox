import React , {useState,useEffect, useLayoutEffect} from 'react';
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"
import 'map.css'

export default function MapBox() {
    const [random, setRandom] = useState(Math.random());


    mapboxgl.accessToken = "pk.eyJ1IjoibWFrZWVtNDkiLCJhIjoiY2t1a3hhdGhwMjNybTJwbnZjOTVtZjdzbiJ9.2VPLyMzGbJkJDRSS1NLFOg";

    useLayoutEffect(()=> {
        const map = new mapboxgl.Map({
            container: 'map', // matches <div id="map" />
            style: 'mapbox://styles/mapbox/dark-v10', // sets the dark mode
            center: [12.567898, 55.675830], // Sets the center of the map (long, lat)
            zoom: 10
        });

        console.log(map)
        return () => {
            map.remove()
        }
    }, 
    
    [random])


      return <>
        <button id="re-render" onClick={() => setRandom(Math.random())}>Re-render</button>
        <div id="map"></div>
    </>;
}