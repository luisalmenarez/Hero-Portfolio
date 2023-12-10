export const Header = () => {
  return (
    <header className="container mx-auto">
      <ul className="flex gap-8 p-5">
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
            className="pb-5 border-b-2 border-transparent font-medium hover:border-pink-500 hover:text-pink-500 transition-all duration-300">
            How to works
          </a>
        </li>
        <li>
          <a
            href="/"
            className="pb-5 border-b-2 border-transparent font-medium hover:border-pink-500 hover:text-pink-500 transition-all duration-300">
            Get a developer
          </a>
        </li>
        <li>
          <a
            href="/"
            className="py-2 px-4 border rounded-full font-medium hover:bg-pink-500 hover:text-white transition-all duration-300">
            Login
          </a>
        </li>
      </ul>
    </header>
  );
};
