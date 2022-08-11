import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import React from "react";
import Cards from "../components/Cards/Cards";
import Chatbot from "../components/Chatbot/Chatbot";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Cards></Cards>
      <Chatbot></Chatbot>
    </>
  );
}
