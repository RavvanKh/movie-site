import React from "react";

import FeatureMovieLoading from "@/components/featured-movie/loading";
import CategoriesLoading from "@/components/categories/loading";
import  MoviesSectionLoading from "@/components/movies-section/loading";

function HomeLoading() {
  return (
    <>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </>
  );
}

export default HomeLoading;