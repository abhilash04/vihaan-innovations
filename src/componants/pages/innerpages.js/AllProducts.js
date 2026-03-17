import { Grid } from "@mui/material";
import React from "react";
import HeaderSec from "../../common/HeaderSec";
import Header from "../../common/Header";
import AllProductCollection from "../sections/AllProductCollection";
import CategoryMenuCollection from "../sections/CategoryMenuCollection";
import Footer from "../../common/Footer";

const AllProducts = () => {
  return (
    <Grid>
      <HeaderSec />
      <AllProductCollection />
      <Footer />
    </Grid>
  );
};

export default AllProducts;
