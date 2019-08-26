import React from "react";
import ReactMapboxGl, { ZoomControl, RotationControl, Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
    accessToken:
        "pk.eyJ1IjoibWFyY3VzMjExIiwiYSI6ImNqaTA4ajlqODE1bjczdnBra2dnNGZnaGIifQ.0kEccLVz8lRDsZmsRigh7A"
});

class MapBase extends React.Component {
    render() {
        return (
            <Map
                style={`mapbox://styles/mapbox/streets-v9`}
                containerStyle={{
                    height: "400px",
                    width: "100%"
                }}
                center={[121.54359877109528, 25.033301403308528]}
                zoom={[16]}
            >
                <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}
                >
                    <Feature coordinates={[
                        121.54359877109528,
                        25.033301403308528
                    ]} />
                </Layer>
                <ZoomControl position={`top-left`} />
                <RotationControl position={`top-left`} />
            </Map>
        );
    }
}

export default MapBase;
