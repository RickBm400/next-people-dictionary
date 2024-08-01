"use client";
import "./landing.sass";
import ContentCards from "@/components/ContentCards";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import LoginCards from "./components/LogIn";

export default function Home() {
  return (
    <main id="home-page">
      <section
        id="landing"
        className="flex justify-center flex-col items-center"
      >
        <nav className="landing__nav flex justify-end items-center">
          <ul className="landing__nav__links flex">
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
        </nav>
        <div className="landing__container p-[24px] rounded-[24px]">
          <div className="-title rounded-tr-[24px]">
            <h1>COWORKING SPACE</h1>
            <div className="-corners-1" />
            <div className="-corners-2" />
          </div>
        </div>
      </section>
      <section id="about" className="flex space-x-16 items-end">
        <div className="about__info flex flex-col">
          <h2 className="about__info-title mb-auto">ABOUT</h2>
          <p className="about__info-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit minus
            incidunt magni eos saepe ab possimus aspernatur, quam ad similique
            asperiores perspiciatis laborum repellat officia. Fuga omnis itaque
            ipsa quidem. <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus impedit culpa, aspernatur ratione quas vel, repellat,
            expedita possimus ducimus quis omnis voluptate. Odit atque quis qui
            molestias, natus accusamus! Eos?
          </p>
        </div>
        <div className="about__scroller flex space-x-6 items-end ">
          {[1, 2, 3].map((numer) => (
            <ContentCards
              key={numer}
              className={"flex-1 rounded-[12px] h-[100%]"}
            ></ContentCards>
          ))}
        </div>
      </section>
      <section id="logins" className="flex justify-center items-center">
        <div className="logins__cards flex w-full  space-x-6 ">
          {[1, 2].map((cardId) => (
            <LoginCards key={cardId} />
          ))}
        </div>
      </section>
      <section id="user__types"></section>
      <footer id="footer">footerItem</footer>
    </main>
  );
}
