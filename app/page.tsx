"use client";
import "./landing.sass";
import { michroma, inter } from "./utils/font";
import ContentCards from "@/components/ContentCards";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { Button } from "@mui/material";
import LoginCards from "./components/LogIn";

export default function Home() {
  return (
    <main id="home-page" className={`${inter.className}`}>
      <section
        id="landing"
        className="flex justify-center flex-col items-center"
      >
        <Image
          className="landing__background"
          src="/images/coworking-image.png"
          alt="coworking"
          objectFit="cover"
          quality={100}
          layout="fill"
          style={{ zIndex: -1 }}
        />

        <div className="landing__content">
          <div className="-title pt-2 pb-10 pl-2 pr-8">
            <h1 className={michroma.className}>Cowork</h1>
            <div className="corners-1" />
            <div className="corners-2" />
          </div>

          <nav className="-nav flex items-center">
            <ul className="flex space-x-16 items-center">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <Button className="capitalize ml-4">Login</Button>
          </nav>

          <div className="-primaryInfo space-y-4">
            <div style={{ color: "white" }} className={`${inter.className}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              sunt amet architecto sed similique vel quia quaerat, fuga
              exercitationem ut consequuntur facere obcaecati odio iure
              deserunt, aspernatur velit accusamus molestias.
            </div>
            <div>
              <Button>Get Started</Button>
            </div>
          </div>

          <h3 className={`-motto ${michroma.className}`}>
            Find Better places and <br />
            get rid of wasting time.
          </h3>

          <span className="-scrollDown">Scroll down</span>
        </div>
      </section>
      <section id="about" className="flex space-x-16 items-center">
        <div className="about__info flex flex-col">
          <h2 className={`about__info--title mb-auto ${michroma.className}`}>
            About
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
