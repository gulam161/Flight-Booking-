import React from "react";
// import image1 from "./assets/image-1.webp";
import Navbar from "./component/Navbar";
import Booking from "./component/Booking";
import Table from "./component/Table";
type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <div className="bg-[url(./assets/flight.avif)]  bg-cover bg-no-repeat">
      <Navbar />
      <section className="h-screen">
        <Booking />
        <Table />
      </section>
    </div>
  );
};
export default App;
