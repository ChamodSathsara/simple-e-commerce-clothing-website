import CardList from "@/components/CardList";
import Card from "@/components/Cart";
import Hero from "@/components/Hero";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <CardList />
      <Footer />
    </div>
  );
}

export default Home;
