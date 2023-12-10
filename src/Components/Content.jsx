import {
  RiInstagramLine,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookCircleFill,
} from "react-icons/ri";

export const Content = () => {
  return (
    <section className="lg:container lg:mx-auto py-5 px-10">
      <h3 className="text-gray-500 text-lg mb-2">Portfolio</h3>
      <h1 className="text-pink-500 font-medium text-2xl mb-2">Isabel Davies</h1>
      <p className="text-gray-500 text-lg mb-5 w-4/5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
        minus perferendis sint inventore porro cupiditate, laboriosam animi nemo
        odit quis, sunt incidunt? Quia quam, ut fuga temporibus facilis quidem
        inventore omnis ducimus repellat earum architecto totam hic voluptatem.
      </p>
      <div className="mb-2">
        <ul className="flex justify-center gap-5">
          <li>
            <a
              href="#"
              target="_blank"
              className="p-4 block bg-gray-100 rounded-full hover:text-pink-500 transition-all duration-300">
              <RiInstagramLine size={25} />
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              className="p-4 block bg-gray-100 rounded-full hover:text-pink-500 transition-all duration-300">
              <RiLinkedinFill size={25} />
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              className="p-4 block bg-gray-100 rounded-full hover:text-pink-500 transition-all duration-300">
              <RiGithubFill size={25} />
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              className="p-4 block bg-gray-100 rounded-full hover:text-pink-500 transition-all duration-300">
              <RiFacebookCircleFill size={25} />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-5 mb-3">
        <button
          type="button"
          className="bg-pink-500 text-white px-10 py-3 rounded-full font-medium shadow-lg shadow-pink-500">
          Here me
        </button>
        <button
          type="button"
          className="border-2 border-pink-500 text-pink-500 px-10 py-3 rounded-full font-medium hover:bg-pink-500 hover:text-white transition-all duration-300">
          Portfolio
        </button>
      </div>
      <div className="flex justify-center gap-10">
        <img
          src="/public/2.jpg"
          alt="Image"
          className="w-40 h-40 object-cover rounded-2xl shadow-2xl shadow-gray-500"
        />
        <img
          src="/public/3.jpg"
          alt="Image"
          className="w-40 h-40 object-cover rounded-2xl shadow-2xl shadow-gray-500"
        />
      </div>
    </section>
  );
};
