import Image from "next/image";

export default function Home() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Mira y comenta la actividad sísmica!</h1>
          <p class="mb-8 leading-relaxed">Lorem Ipsum, Dolor sit amet</p>
          <div class="flex lg:flex-row md:flex-col">
            <a class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none" href="records">
              <span class="flex items-start flex-col leading-none">
                <span class="title-font font-medium">Listar todos los sismos</span>
              </span>
            </a>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
      </div>
    </section>
  );
}
