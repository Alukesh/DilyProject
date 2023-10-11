/* global google */
import React, { useEffect, useRef, useState } from 'react';
import { useLoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
// import { load } from '@2gis/mapgl';

const Map = () => {
    const libraries = ['places']
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries
    });
    const listenerRef = useRef(null)
    const [mapRef, setMapRef] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [infoWindowData, setInfoWindowData] = useState();
    // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), [])
    const addressEl = document.getElementById('map-search')

    useEffect(() => {
        return () => {
            google.maps.event.removeListener(listenerRef.current)
        }
    },[])
    const getAddress = (lat, lng) => {
        const geocoder = new google.maps.Geocoder();
        const latlng = new google.maps.LatLng(lat, lng);
        const request = {
            latLng: latlng
        }
        return new Promise((resolve, reject) => {
            geocoder.geocode(request, results => {
                results?.length ? resolve(results[0].formatted_address) : reject(null);
            });
        })
    }

    const [locate, setLocate] = useState({ lat: 18.5204, lng: 73.8567 })
    const markers = [
        { address: "Address1", ...locate },
        { address: "Address2", lat: 18.5314, lng: 73.8446 },
        // { address: "Address3", lat: 18.5642, lng: 73.7769 },
    ];


    const onMapLoad = (map) => {
        const searchBox = new google.maps.places.SearchBox(addressEl);
        const searchListener = google.maps.event.addListener(searchBox, 'places_changed', function () {
            console.log(searchBox.getPlaces());
            let places = searchBox.getPlaces(),
                bounds = new google.maps.LatLngBounds(),
                i, place;

            for (i = 0; place === places[i]; i++) {
                bounds.extend(place.geometry.location)
                setLocate(
                    {
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng()
                    }
                )
            }
        })
        listenerRef.current = searchListener;
        setMapRef(map)
        const bounds = new google.maps.LatLngBounds();
        markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }))
        map.fitBounds(bounds)
    }

    const handleMarkerClick = (id, lat, lng, address) => {
        mapRef?.panTo({ lat, lng })
        setInfoWindowData({ id, address })
        setIsOpen(true)
    }

    // console.log(event.latLng.lat(), event.latLng.lng())
    const mapClicked = (event) => {
        setIsOpen(false)
    }
    const markerDragEnd = async (event, index) => {
        const [lat, long] = [event.latLng.lat(), event.latLng.lng()]
        console.log(lat, long)
        const address = await getAddress(event.latLng.lat(), event.latLng.lng())
        console.log('address', address)
        addressEl.value = address || ''
    }




    return (
        <div style={{ width: '100%', height: '400px' }}>
            {/* <MapWrapper/> */}
            {
                !isLoaded ? (<div>...Loading</div>) : (
                    <GoogleMap
                        mapContainerClassName='map-container'
                        onLoad={onMapLoad}
                        onClick={mapClicked}
                        center={locate}
                        zoom={5}
                    >
                        {markers.map(({ address, lat, lng }, ind) => (
                            <Marker
                                key={ind}
                                position={{ lat, lng }}
                                draggable={true}
                                onDragEnd={event => markerDragEnd(event, ind)}
                                icon={' http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
                                onClick={() => {
                                    handleMarkerClick(ind, lat, lng, address);
                                }}
                            >
                                {isOpen && infoWindowData?.id === ind && (
                                    <InfoWindow
                                        onCloseClick={() => {
                                            setIsOpen(false);
                                        }}
                                    >
                                        <h3>{infoWindowData.address}</h3>
                                    </InfoWindow>
                                )}
                            </Marker>
                        ))}
                    </GoogleMap>
                )
            }
        </div>
    );
};

export default Map;