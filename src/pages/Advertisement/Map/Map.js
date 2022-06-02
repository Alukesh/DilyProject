import React, {useEffect} from 'react';
import { load } from '@2gis/mapgl';
import MapWrapper from "./MapWrapper";

const Map = () => {
    useEffect(() =>{
        let map;
        load().then((mapglAPI) =>{
            map = new mapglAPI.Map('map-container', {
                center: [55.31878, 25.23584],
                zoom: 13,
                key: 'Your API access key',
            });
        });

        return () => map && map.destroy();
    },[]);

    return (
        <div style={{ width: '100%', height: '100px' }}>
            <MapWrapper/>
        </div>
    );
};

export default Map;