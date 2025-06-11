
// async function getStrapiData(url: string) {
//   const baseUrl = "http://localhost:1337"
//   try {
//     const response = await fetch(baseUrl + url);
//     const data = await response.json()
//     return data
//   } catch(error) {
//     console.log(error)
//   }
// }

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import SampleSection from "./components/SampleSection/SampleSection";

export default async function Home() {

  // const strapiData = await getStrapiData("/api/chat-doc/")
  // console.log(strapiData)

  return (
    <div>
      <Navbar />
      <Hero />
      <SampleSection />
    </div>
  );
}
