import { StateCreator } from "zustand";
export interface ProcessSlice {
  locationType: any | undefined;
  placeType: any | undefined;
  mapData: any | undefined;
  locationData?: any | undefined;
  titleDeed?: string;
  placeSpace: {
    bathroom: number;
    beds: number;
    guests: number;
  };
  placeAmenities: string[];
  photos: string[];
  title: string;
  description: string;
  price: number;
  setLocationType: (l: any) => void;
  setPlaceType: (p: any) => void;
  setMapData: (mp: any) => void;
  setTitleDeed: (t: string) => void;
  setLocationData: (l: any) => void;
  setPlaceSpace: (ps: any) => void;
  setPlaceAmenities: (a: string[]) => void;
  setPhotos: (p: string[]) => void;
  setTitle: (i: string) => void;
  setDescription: (d: string) => void;
  setPrice: (p: number) => void;
}

export const createProcessSlice: StateCreator<
  ProcessSlice,
  [],
  [],
  ProcessSlice
> = (set, get) => ({
  locationType: undefined,
  placeType: undefined,
  mapData: undefined,
  locationData: undefined,
  placeSpace: {
    bathroom: 1,
    beds: 1,
    guests: 2,
  },
  placeAmenities: [],
  photos: [],
  title: "",
  description: "",
  price: 1,
  setLocationType: (locationType) => set({ locationType }),
  setPlaceType: (placeType) => set({ placeType }),
  setMapData: (mapData) => set({ mapData }),
  setLocationData: (locationData) => set({ locationData }),
  setPlaceSpace: (placeSpace) => set({ placeSpace }),
  setPlaceAmenities: (placeAmenities) => set({ placeAmenities }),
  setPhotos: (photos) => set({ photos }),
  setTitle: (title) => set({ title }),
  setTitleDeed: (titleDeed) => set({ titleDeed }),
  setDescription: (description) => set({ description }),
  setPrice: (price) => set({ price }),
});
