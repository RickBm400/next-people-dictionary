"use client";
import "./landing.sass";
import { michroma, inter } from "./utils/font";
import ContentCards from "@/components/ContentCards";
import { Button } from "@mui/material";
import LoginCards from "./components/LogIn";

export default function Home() {
  return (
    <main id="home-page">
      <section
        id="landing"
        className="flex justify-center flex-col items-center"
      >
        {false && (
          <nav className="landing__nav flex justify-end items-center">
            <ul className="landing__nav__links flex items-center">
              <li>Home</li>
              <li>About</li>
              <li>Contacts</li>
              <Button
                variant="text"
                disableElevation
                disableRipple
                className={`capitalize ${inter.className}`}
                href="/login"
              >
                login
              </Button>
            </ul>
          </nav>
        )}
        <div className="landing__container p-[24px] ">
          <nav className="landing__container-nav">
            <ul className="flex space-x-4 items-center justify-end">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contacts</li>
              <a href="/login">
                <li className="cursor-pointer">Login</li>
              </a>
            </ul>
          </nav>
          <div className="-title">
            <h1 className={michroma.className}>Coworking Net //</h1>
            <div className="-corners-1" />
            <div className="-corners-2" />
          </div>
        </div>
      </section>
      <section id="about" className="flex space-x-16 items-center">
        <div className="about__info flex flex-col">
          <h2 className={`about__info--title mb-auto ${michroma.className}`}>
            ABOUT
          </h2>
          <p className="about__info--content">
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
      <section id="userTypes" className="flex flex-col">
        <div className="userTypes__header pb-9">
          <h2 className={`userTypes__header--title ${michroma.className}`}>
            READY TO JOIN US?{" "}
          </h2>
          <p
            className={`userTypes__header--description ${inter.className} w-[60%]`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi
            cum libero voluptates modi odio eligendi delectus quas laborum
            dolorum dicta ab voluptatum molestias aperiam, cupiditate quia omnis
            optio iste.
          </p>
        </div>
        <div className="userTypes__cards h-full flex space-x-6">
          {["member", "organization"].map((cardId) => (
            <LoginCards key={cardId} user={cardId} />
          ))}
        </div>
      </section>
      <section id="user__types"></section>
      <footer id="footer">footerItem</footer>
    </main>
  );
}
