import React , {useLayoutEffect}from "react";
import mapboxgl from "!mapbox-gl"
import 'mapbox-gl/dist/mapbox-gl.css';


export default function useMapboxMap(setMarker, container, zoom, center) {

    mapboxgl.accessToken = "pk.eyJ1IjoibWFrZWVtNDkiLCJhIjoiY2t1a3hhdGhwMjNybTJwbnZjOTVtZjdzbiJ9.2VPLyMzGbJkJDRSS1NLFOg";

    useLayoutEffect(() => {
        const map = new mapboxgl.Map({
            container: container,
            style: 'mapbox://styles/mapbox/dark-v10',
            center:  [ 12.567898, 55.67583 ],
            zoom: zoom,
        });

        const marker = new mapboxgl.Marker(true)
        .setLngLat(center)
        .addTo(map); // add the marker to the map

        setMarker(marker)
    }, [])
    
}