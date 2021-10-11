import React, {useState, useLayoutEffect} from "react";
import {render} from "react-dom";

function App() {
    const [point, setPoint] = useState([]);
    const [location , setLoaction] = useState();

    // TODO: replace with your access token
    mapboxgl.accessToken = "pk.eyJ1IjoibWFrZWVtNDkiLCJhIjoiY2t1a3hhdGhwMjNybTJwbnZjOTVtZjdzbiJ9.2VPLyMzGbJkJDRSS1NLFOg";

    useLayoutEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center:  [ 12.567898, 55.67583 ],
            zoom: 9
        });

        const marker = new mapboxgl.Marker()
        .setLngLat([ 12.567898, 55.67583 ])
        .addTo(map)
    }, []);

    const stores = {
        central: [12.567898, 55.67583],
        norrebro: [12.553806, 55.699299],
        airport: [12.650784, 55.618042]
    }
    // console.log(stores['central'])

    function handleSelectPoint(e) {
        console.log(e.target.value)
        setLoaction(prevPoint => e.target.value)
        setPoint(stores[location])
    }

    // console.log(point)

    return <>
        <div className="map-overlay">
            <h3>Choose store: </h3>
            <select name='city' value={location} onChange={handleSelectPoint}>
                <option selected value="central">Central station</option>
                <option value="norrebro">Norrebro street</option>
                <option value="airport">CPH Airport</option>
            </select>
        </div>
        <div id="map"></div>
    </>;
}

// Do NOT modify the code below
// Special map loading setup
// specific to react-tutorial.app
const script = document.createElement("script");
script.src = "https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js";
script.onload = () => {
    render(<App />, document.querySelector("#react-root"));
}

document.body.appendChild(script)
