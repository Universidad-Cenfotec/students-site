"use client";

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Map = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (mapContainerRef.current) {
            const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

            if (!accessToken) {
                console.error('Mapbox access token is not defined. Please set NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN in your environment variables.');
                return;
            }

            mapboxgl.accessToken = accessToken;

            // Add a small delay to ensure the container is fully rendered
            const timer = setTimeout(() => {
                const map = new mapboxgl.Map({
                    container: mapContainerRef.current,
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: [-84.0643, 9.9312],
                    zoom: 17,
                    antialias: true
                });

                map.on('load', () => {
                    console.log('Map loaded successfully');
                    // Force a resize to ensure proper rendering
                    map.resize();
                });

                map.on('error', (e) => {
                    console.error('Map error:', e);
                });

                map.on('render', () => {
                    console.log('Map rendering...');
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
            }, 100);

            return () => {
                clearTimeout(timer);
            };
        }
    }, []);

    return (
        <div className="w-full rounded-3xl relative overflow-hidden">
            <div
                ref={ mapContainerRef }
                style={ {
                    width: '100%',
                    height: '400px',
                    borderRadius: '20px',
                    minHeight: '400px',
                    backgroundColor: '#f3f4f6',
                    position: 'relative',
                    zIndex: 1,
                    display: 'block'
                } }
                className="map-container"
            />
            { !process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-3xl z-10">
                    <div className="text-center p-8">
                        <div className="text-gray-500 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1 } d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1 } d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <p className="text-gray-600 font-medium">Mapa no disponible</p>
                        <p className="text-sm text-gray-500 mt-2">Configura el token de Mapbox para ver el mapa</p>
                    </div>
                </div>
            ) }
        </div>
    );
};
