import React from "react";
import { Map } from "react-map-gl";
import GeocoderControl from "./geocoder-control";
import { useAppStore } from "@/store/store";

const PlaceLocation = () => {
  const { mapData, locationData, setMapData, setLocationData } = useAppStore();

  const getResults = ({ result }: any) => {
    const [longitude, latitude] = result?.geometry?.coordinates;
    const data = {
      landmark: result?.text,
      neighborhood: "",
      postcode: "",
      locality: "",
      place: "",
      district: "",
      region: "",
      country: "",
    };
    result?.context.forEach((item: any) => {
      Object.keys(data)?.forEach((i) => {
        if (item?.id?.startsWith(i + ".")) {
          (data as any)[i] = item?.text;
        }
      });
    });
    setMapData({ longitude, latitude });
    setLocationData({ ...data });
  };
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5">
      <h2 className="font-semibold text-4xl">Where is your place located?</h2>
      <p>
        Your address is only shared with leasers after they’ve made a
        reservation.
      </p>
      <div className="h-[400px] w-[700px] ">
        <Map
          initialViewState={{
            longitude: 36.8043483,
            latitude: -1.3148565,
            zoom: 13,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        >
          <GeocoderControl
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            position="top-left"
            marker
            onLoading={() => {}}
            onResults={() => {}}
            onResult={getResults}
            onError={() => {}}
          />
        </Map>
      </div>
    </div>
  );
};

export default PlaceLocation;
