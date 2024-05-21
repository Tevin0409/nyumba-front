"use client";
import ListingCard from "@/components/ListingCard";
import { fetchAllListings } from "@/lib/actions/listing.actions";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [listings, setListings] = useState<ListingProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const loadListings = async () => {
      const response = await fetchAllListings();
      if (response.error) {
        setError(response.error);
      } else if (response.listings) {
        setListings(response.listings);
      }
    };
    loadListings();
  }, []);
  return (
    <section className=" main-container pt-16 grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
      {listings.map((listing) => {
        // const hasFavorited = favorites.includes(listing.id);
        return (
          <ListingCard key={listing.id} data={listing} hasFavorited={true} />
        );
      })}
    </section>
  );
};

export default Home;
