import { Content } from "./Components/Content";
import { Header } from "./Components/Header";

export const App = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 min-h-screen">
      <section className="lg:col-span-4 h-screen">
        <img
          src="./public/1.jpg"
          alt="Image"
          className="h-full object-cover grayscale"
        />
        <span className="absolute w-40 h-40 bg-pink-500/80 rounded-full -top-20 -left-20 shadow-md shadow-pink-500"></span>
      </section>
      <section className="lg:col-span-8 relative overflow-hidden">
        <Header />
        <hr />
        <Content />
        <span className="absolute w-40 h-40 bg-pink-500/80 rounded-full -bottom-32 -right-10"></span>
        <span className="absolute w-60 h-60 bg-pink-500/80 rounded-full top-10 -right-48 shadow-2xl shadow-pink-500"></span>
      </section>
    </main>
  );
};
