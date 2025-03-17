import { create } from "zustand";
import { persist } from "zustand/middleware";
import { indexedDBStorage } from "../database/indexedDB";

const useMemeStore = create()(
  persist(
    (set, get) => ({
      memes: [
        {
          id: "3d0ea11b-e2d2-420a-8693-0c476a2da4cc",
          name: "Sports",
          description: "sports event",
          location: {
            id: 13370133,
            name: "SSS islands",
            state: "Netherlands",
            country: "Netherlands",
            longitude: -63.15509509333325,
            latitude: 17.6719878,
          },
          date: "2025-03-21",
          category: "Religious",
          url: "https://i.ibb.co/7Nzq9Cq6/2a3d15e3f911.jpg",
        },
        {
          id: "45db0d21-d5ed-4f59-91ed-fafb32cd4720",
          name: "Reuinon",
          description: "having a small reunion",
          location: {
            id: 7144092,
            name: "University of Wisconsin-Madison",
            street: "Big Oak Trail",
            city: "Madison",
            state: "Wisconsin",
            country: "United States",
            postcode: "53792",
            longitude: -89.43095871991434,
            latitude: 43.080274450000005,
          },
          date: "2025-03-10",
          category: "Social",
          url: "https://i.ibb.co/YB5YdRjD/bd2de39858a3.jpg",
        },
        {
          id: "f9929cf1-b2b4-4f85-8d8b-f83ffd00db51",
          name: "Nature",
          description: "having a nature reunion",
          location: {
            id: 103330204,
            name: "Line A",
            street: "Lungotevere Michelangelo",
            city: "Rome",
            state: "Lazio",
            country: "Italy",
            postcode: "00195",
            longitude: 12.4706575,
            latitude: 41.9119703,
          },
          date: "2025-03-21",
          category: "Charity",
          url: "https://i.ibb.co/TqwwjVmV/206adff797bd.jpg",
        },
      ], // Keep initial data

      getMemes: async () => {
        set({ memes: get().memes });
      },

      addUserMeme: (meme) => {
        set((state) => {
          const newMemes = [...state.memes, meme];
          console.log("[MemeStore] Added meme:", meme);
          return { memes: newMemes };
        });
      },
    }),
    {
      name: "event-store",
      storage: {
        ...indexedDBStorage,
      },
    }
  )
);

export default useMemeStore;
