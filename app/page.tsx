"use client";
import "./landing.sass";
import { MICHROMA, INTER } from "./utils/font";
import ContentCards from "@/components/ContentCards";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import UserTypeCards from "./components/UserTypeCards";
import { useState } from "react";

const PersonButton = styled(Button)({
  boxShadow: "none",
  border: "1px solid white",
  color: "white",
  borderRadius: "14px",
  paddingInline: "36px",
});

interface user_cards {
  userType: string;
  className?: string;
  image: string;
}

const userCards: Readonly<Array<user_cards>> = [
  {
    userType: "MEMBER",
    image: "/images/single-user.jpg",
  },
  {
    userType: "ORGANIZATION",
    image: "/images/coffe-shop.jpg",
  },
];

export default function Home() {
  return (
    <main id="home-page" className={`${INTER.className}`}>
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
            <h1 className={MICHROMA.className}>Cowork</h1>
            <div className="corners-1" />
            <div className="corners-2" />
          </div>
          5
          <nav className="-nav flex items-center">
            <ul className="flex space-x-16 items-center">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            {/* <Button
              className="capitalize ml-4"
              variant="outlined"
              disableElevation
            >
              Login
            </Button> */}
            <PersonButton
              className="ml-16"
              disableRipple
              disableFocusRipple
              href="login"
            >
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  textTransform: "capitalize",
                }}
              >
                Log In
              </span>
            </PersonButton>
          </nav>
          <div className="-primaryInfo space-y-4">
            <div
              style={{ color: "white" }}
              className={`${INTER.className} mb-8`}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              sunt amet architecto sed similique vel quia quaerat, fuga
              exercitationem ut consequuntur facere obcaecati odio iure
              deserunt, aspernatur velit accusamus molestias.
            </div>
            <div>
              <PersonButton disableFocusRipple disableRipple className="py-2">
                Get Started
              </PersonButton>
            </div>
          </div>
          <h3 className={`-motto ${MICHROMA.className}`}>
            Find Better places and <br />
            get rid of wasting time.
          </h3>
          <span className="-scrollDown">Scroll down</span>
        </div>
      </section>
      <section id="short_description">
        <div className={`card ${MICHROMA.className}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            fugit enim, reiciendis cum voluptate aspernatur ratione nulla
            dolores aut, vel excepturi doloribus ad quia saepe perferendis modi
            nisi quidem cumque.
          </p>
        </div>
      </section>
      <section id="about" className="flex space-x-8 items-center relative">
        <div className="about_container_left container-1 w-[35%]">
          <Image
            style={{ borderRadius: "24px", zIndex: -1 }}
            src="/images/coworking-image.png"
            alt="back"
            objectFit="cover"
            quality={100}
            layout="fill"
          />
        </div>
        <div className="about_container_right w-[65%]">
          <h1 className={`${MICHROMA.className} header-1`}>Michroma Fonts</h1>
          <p className={`${INTER.className}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            autem maxime dolorem id corporis commodi? Harum officia eaque,
            accusantium error facere odio eum, dignissimos rerum exercitationem
            odit nostrum iste animi.
          </p>
        </div>
      </section>
      {/* <section id="userTypes" className="flex flex-col">
        <div className="userTypes__header pb-9 flex flex-row">
          <h2
            className={`userTypes__header--title basis-2/3 ${MICHROMA.className}`}
          >
            READY TO <br />
            JOIN US?
          </h2>
          <p
            className={`userTypes__header--description basis-1/3 ${INTER.className} self-end w-[60%]`}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
            ullam aliquid, maiores voluptates provident quasi exercitationem
            commodi accusantium, a suscipit consequuntur eveniet! Repellendus
            corporis fugiat quis iure porro quas est?
          </p>
        </div>
        <div className="userTypes__cards h-full flex space-x-6">
          {userCards.map((card) => (
            <UserTypeCards
              key={card.userType}
              userType={card.userType}
              image={card.image}
            />
          ))}
        </div>
      </section> */}
      {/* <footer id="footer">footerItem</footer> */}
    </main>
  );
}
