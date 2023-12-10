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
        <span className="absolute w-40 h-40 bg-pink-500/80 rounded-full -top-20 -left-20"></span>
      </section>
      <section className="lg:col-span-8">
        <Header />
        <hr />
        <Content />
      </section>
    </main>
  );
};
