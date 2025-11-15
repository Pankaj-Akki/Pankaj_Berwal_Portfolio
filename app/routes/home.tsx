import type { Route } from "./+types/home";
import Header from "../components/Header";
import MainSection from "../components/MainSection.jsx"; // ✅ fix here


import "../app.css";
import "../components/MainSection.css"; // ✅ import MainSection styles

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | My App" },
    { name: "description", content: "Welcome to my custom homepage!" },
  ];
}

export default function Home() {
  return (
    <>

      <Header />

      <MainSection /> 


    </>
  );
}
