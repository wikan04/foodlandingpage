import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="body-font">
      <section className="container mx-auto bg-sugarCane rounded-3xl px-5 py-24">
        <div className="mx-10 grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
          {/* Logo and Contact Info */}
          <div className="mx-auto w-64 md:mx-0">
            <a className="title-font flex items-center justify-center md:justify-start">
              <img src="/elemesicon.jpg" alt="" />
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
              Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12950
            </p>

            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-sushi transition-colors duration-300 hover:bg-sushi hover:text-white"
              >
                <EnvelopeIcon className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-sushi transition-colors duration-300 hover:bg-sushi hover:text-white"
              >
                <PhoneIcon className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-sushi transition-colors duration-300 hover:bg-sushi hover:text-white"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Categories and About Us for Mobile */}
          <div className="block md:hidden">
            <div className="flex flex-wrap justify-between gap-8">
              <div>
                <h2 className="title-font mb-3 text-xl font-bold text-gray-900">
                  Categories
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mb-3">
                    <a className="text-gray-600 hover:text-gray-800">Cupcake</a>
                  </li>
                  <li className="mb-3">
                    <a className="text-gray-600 hover:text-gray-800">Pizza</a>
                  </li>
                  <li className="mb-3">
                    <a className="text-gray-600 hover:text-gray-800">Kebab</a>
                  </li>
                  <li className="mb-3">
                    <a className="text-gray-600 hover:text-gray-800">Salmon</a>
                  </li>
                  <li className="mb-3">
                    <a className="text-gray-600 hover:text-gray-800">Dougnut</a>
                  </li>
                </nav>
              </div>

              <div>
                <h2 className="title-font mb-3 text-xl font-bold text-gray-900">
                  About Us
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mb-3">
                    <a className="text-gray-600 hover:text-gray-800">
                      About Us
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-gray-600 hover:text-gray-800">FAQ</a>
                  </li>
                  <li className="mb-3">
                    <a className="text-gray-600 hover:text-gray-800">
                      Report Problem
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>

          {/* Categories for Desktop */}
          <div className="hidden md:block">
            <h2 className="title-font mb-3 text-xl font-bold text-gray-900">
              Categories
            </h2>
            <nav className="mb-10 list-none">
              <li className="mb-3">
                <a className="text-gray-600 hover:text-gray-800">Cupcake</a>
              </li>
              <li className="mb-3">
                <a className="text-gray-600 hover:text-gray-800">Pizza</a>
              </li>
              <li className="mb-3">
                <a className="text-gray-600 hover:text-gray-800">Kebab</a>
              </li>
              <li className="mb-3">
                <a className="text-gray-600 hover:text-gray-800">Salmon</a>
              </li>
              <li className="mb-3">
                <a className="text-gray-600 hover:text-gray-800">Dougnut</a>
              </li>
            </nav>
          </div>

          {/* About Us for Desktop */}
          <div className="hidden md:block">
            <h2 className="title-font mb-3 text-xl font-bold text-gray-900">
              About Us
            </h2>
            <nav className="mb-10 list-none">
              <li className="mb-3">
                <a className="text-gray-600 hover:text-gray-800">About Us</a>
              </li>
              <li className="mb-3">
                <a className="text-gray-600 hover:text-gray-800">FAQ</a>
              </li>
              <li className="mb-3">
                <a className="text-gray-600 hover:text-gray-800">
                  Report Problem
                </a>
              </li>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="title-font mb-3 text-xl font-bold text-gray-900">
              Newsletter
            </h2>
            <div className="flex flex-col items-center md:items-start">
              <p className="mb-4 text-center text-sm text-gray-500 md:text-left">
                Get now free 50% discount for all products on your first order
              </p>
              <div className="relative w-full max-w-xs">
                <input
                  type="email"
                  id="newsletter-email"
                  name="newsletter-email"
                  placeholder="Your email address"
                  className="w-full rounded border border-gray-300 px-3 py-2 pr-12 text-base leading-8 text-gray-700 outline-none focus:border-sushi"
                />
                <button className="absolute right-0 top-0 rounded-r border-0 bg-sushi px-6 py-[13px] text-white hover:bg-sushiLight focus:outline-none">
                  SEND
                </button>
              </div>
            </div>
            <div className="mt-4 flex space-x-2 items-center">
              <EnvelopeIcon className="h-5 w-5 text-sushi" />
              <p>elemesid@gmail.com</p>
            </div>
            <div className="mt-4 flex space-x-2 items-center">
              <PhoneIcon className="h-5 w-5 text-sushi" />
              <p> 0888 1111 2222 </p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <section className="">
        <div className="container mx-auto px-5 py-6 text-center">
          <p className="mt-4 text-sm text-gray-500 sm:mt-0 sm:ml-6">
            © 2021 Elemes id. All rights reserved
          </p>
        </div>
      </section>
    </footer>
  );
}
