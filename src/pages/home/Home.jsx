import { Hero, Navbar } from "../../components/pages/home-components";
import { Faq } from "../../components/pages/home-components/faq";
import { Footer } from "../../components/pages/home-components/footer/footer";
import { Know } from "../../components/pages/home-components/know/know";
import { Platform } from "../../components/pages/home-components/platform/platform";
import { Services } from "../../components/pages/home-components/services/services";
import { Socielity } from "../../components/pages/home-components/socielity/socielity";
import { Subscribe } from "../../components/pages/home-components/subscribe/subscribe";
import { Testimonial } from "../../components/pages/home-components/testimonial/testimonial";
import { Trusted } from "../../components/pages/home-components/trusted/trusted";

export const Home = () => {
  return (
    <>
      <div className="bg-white-1">
        <div className="container">
          <Navbar />
          <Hero />
          <Trusted />
          <Services />
          <Socielity />
          <Testimonial />
          <Know />

        </div>
      </div>
      <div className="container">
        <Faq />
        <Platform />
        <Subscribe />
      </div>
      <div className="bg-blue-default">
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
};
