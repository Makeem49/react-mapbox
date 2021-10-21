import React , {useState,useEffect, useLayoutEffect} from 'react';
import mapboxgl from "!mapbox-gl"
import 'mapbox-gl/dist/mapbox-gl.css';
import 'map.css'
import useMapboxMap from './useMapboxMap.hook.js';

export default function MapBox() {
    let [marker, setMarker] = useState();
    const [city, setCity] = useState('')

    mapboxgl.accessToken = "pk.eyJ1IjoibWFrZWVtNDkiLCJhIjoiY2t1a3hhdGhwMjNybTJwbnZjOTVtZjdzbiJ9.2VPLyMzGbJkJDRSS1NLFOg";

    // creating a custom hooks to extract initializing map code 
    useMapboxMap(setMarker, 'map', 9, [ 12.567898, 55.67583 ])

    // Moving the below code to custom hook
    // useLayoutEffect(() => {
    //     const map = new mapboxgl.Map({
    //         container: 'map',
    //         style: 'mapbox://styles/mapbox/dark-v10',
    //         center:  [ 12.567898, 55.67583 ],
    //         zoom: 9,
    //     });

    //     const marker = new mapboxgl.Marker(true)
    //     .setLngLat([ 12.567898, 55.67583 ])
    //     .addTo(map); // add the marker to the map

    //     setMarker(marker)
        
    // },[]);


    
    const coordinate = {
        central: [12.567898, 55.67583],
        norrebro: [12.553806, 55.699299],
        airport: [12.650784, 55.618042]
    }

    function handleChangeSelect(e){
        setCity(e.target.value)
        const selected = coordinate[e.target.value]
        marker.setLngLat(selected)
    }


    return <>
        
        <div className="map-overlay">
            <h1>Choose location :</h1>
            <select name="" id="" value={city} onChange={handleChangeSelect}>
                <option value="central">Central</option>
                <option value="norrebro">norrebro</option>
                <option value="airport">airport</option>
            </select>
        </div>
        <div id="map"></div>
    </>;
}