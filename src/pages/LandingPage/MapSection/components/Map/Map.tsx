import { Box } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'  // Set height or make responsive as necessary
};

const center = {
    lat: 9.931461169627944,    // Latitude for the initial center of the map
    lng: -84.06417588219469  // Longitude for the initial center of the map
};

export const Map = () => {
    const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    return (
        <Box sx={ { width: '100%', boxShadow: '0px 30px 60px rgba(71, 74, 87, 0.25)' } }>

            <LoadScript
                googleMapsApiKey={ googleMapsApiKey }
            >
                <GoogleMap
                    mapContainerStyle={ containerStyle }
                    center={ center }
                    zoom={ 18 }
                >
                    {/* Marker component for showing a specific location */ }
                    <Marker position={ center } />
                    {/* Additional markers or map features here */ }
                </GoogleMap>
            </LoadScript>
        </Box>
    );
};
