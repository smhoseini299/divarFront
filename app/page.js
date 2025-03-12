import Image from "next/image";
import Header from "./components/ui/home/Header";
import Footer from "./components/ui/home/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <section className="flex justify-center items-center mt-3">
          <input
            type="text"
            placeholder="جستجوی شهر"
            className="border fa border-gray-300 w-5/6 ps-4 py-3 rounded-md lg:w-1/2 placeholder:text-gray-400 placeholder:text-lg"
          />
        </section>

        <section className="container flex justify-center w-1/2 flex-col m-auto">
          <header className="flex justify-center items-center mt-10 lg:justify-start">
            <h2 className="text-lg">شهر های پربازدید</h2>
          </header>
          <section className="flex flex-wrap text-center justify-center space-y-14 space-y-reverse mt-10 container ">
            <article className="w-1/3 lg:w-1/5">
              <h3 className="text-gray-500 text-lg">
                <a href="">تهران</a>
              </h3>
            </article>
            <article className="w-1/3 lg:w-1/5">
              <h3 className="text-gray-500 text-lg">
                <a href="">مشهد</a>
              </h3>
            </article>
            <article className="w-1/3 lg:w-1/5">
              <h3 className="text-gray-500 text-lg">
                <a href="">کرج</a>
              </h3>
            </article>
            <article className="w-1/3 lg:w-1/5">
              <h3 className="text-gray-500 text-lg">
                <a href="">شیراز</a>
              </h3>
            </article>
            <article className="w-1/3 lg:w-1/5">
              <h3 className="text-gray-500 text-lg">
                <a href="">اصفهان</a>
              </h3>
            </article>
            <article className="w-1/3 lg:w-1/5">
              <h3 className="text-gray-500 text-lg">
                <a href="">اهواز</a>
              </h3>
            </article>
            <article className="w-1/3 lg:w-1/5">
              <h3 className="text-gray-500 text-lg">
                <a href="">تبریز</a>
              </h3>
            </article>
            <article className="w-1/3 lg:w-1/5">
              <h3 className="text-gray-500 text-lg">
                <a href="">کرمانشاه</a>
              </h3>
            </article>
            <article className="w-1/3 lg:w-1/5">
              <h3 className="text-gray-500 text-lg">
                <a href="">قم</a>
              </h3>
            </article>
            <article className="w-1/3 lg:w-1/5">
              <h3 className="text-gray-500 text-lg">
                <a href="">رشت</a>
              </h3>
            </article>
          </section>
        </section>

        <section className="flex justify-center items-center border-t border-gray-400 py-8 mt-4">
          <div>
            <img src="images/1.png" alt="" className="w-16 h-16" />
          </div>
          <div>
            <img src="images/2.png" alt="" className="w-16 h-16" />
          </div>
          <div>
            <img src="images/3.jpeg" alt="" className="w-16 h-16" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
