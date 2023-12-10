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
      <div className="lg:col-span-8">
        <header>
          <ul className="flex gap-8 border-b p-5">
            <li>
              <a
                href="/"
                className="text-pink-500 pb-5 border-b-2 border-pink-500 font-medium">
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="pb-5 border-b-2 border-transparent font-medium">
                How to works
              </a>
            </li>
          </ul>
        </header>
      </div>
    </main>
  );
};
