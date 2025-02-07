"use client";

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Box } from '@mui/material';

export const Map = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (mapContainerRef.current) {
            mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

            const map = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [-84.0643, 9.9312],
                zoom: 17
            });

            const marker = new mapboxgl.Marker({ color: "red" })
                .setLngLat([-84.0643, 9.9312])
                .addTo(map);

            const markerElement = marker.getElement();
            markerElement.style.cursor = 'pointer';

            markerElement.addEventListener('click', () => {
                window.open(`https://www.waze.com/live-map/directions/universidad-cenfotec-av.-central-bo.-la-california,-san-jose?navigate=yes&to=place.w.180813923.1808401377.26684785`, '_blank');
            });

            return () => {
                map.remove();
            };
        }
    }, []);

    return (
        <Box sx={ { width: '100%', boxShadow: '0px 30px 60px rgba(71, 74, 87, 0.25)', borderRadius: '20px' } }>
            <div
                ref={ mapContainerRef }
                style={ { width: '100%', height: '400px', borderRadius: '20px' } }
                className="map-container"
            />
        </Box>
    );
};
