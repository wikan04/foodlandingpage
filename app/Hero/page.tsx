export default function Heropage() {
  return (
    <section
      className="body-font bg-cover bg-center"
      style={{ backgroundImage: "url('/background-hero.jpg')" }}
    >
      <div className="mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col text-left md:mb-0 md:w-1/2 md:items-start md:pr-16  lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-4xl font-semibold text-sushi lg:text-4xl xl:text-5xl">
            Good Food Us <br className="hidden lg:inline-block" />
            Good Mood
          </h1>
          <div className="inline-block md:hidden w-full">
            <img
              className="rounded object-cover object-center"
              alt="hero"
              src="/saladtomatomobile.png"
            />
          </div>
          <p className="mb-8 leading-relaxed max-w-lg text-boulder text-left">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
          <div className="flex justify-start items-start text-left">
            <button className="inline-flex rounded-full border-0 bg-sushi px-6 py-2 text-xs lg:text-md xl:text-lg text-white font-bold focus:outline-none">
              Daftar Sekarang
            </button>
            <button className="ml-4 inline-flex rounded-full border-0 bg-gray-100 px-6 py-2 text-xs lg:text-md xl:text-lg text-gray-700 font-bold focus:outline-none">
              About Us
            </button>
          </div>
        </div>
        <div className="hidden md:block w-1/2 lg:w-2/3 xl:w-1/2 2xl:w-full lg:max-w-3xl">
          <img
            className="rounded object-cover object-center"
            alt="hero"
            src="/saladtomato.png"
          />
        </div>
      </div>
    </section>
  );
}
