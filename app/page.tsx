"use client";
import "./landing.sass";
import Grid from "@mui/material/Unstable_Grid2";
import ContentCards from "@/components/ContentCards";
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
        <div className="landing__container p-[24px] rounded-[12px]">
          <h1>COWORKING SPACE</h1>
        </div>
      </section>
      <section id="about" className="flex items-center">
        <div className="about__description flex flex-col mr-10">
          <h2 className="mb-auto">Olamundos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit
            praesentium facere soluta possimus minus ut? Et quibusdam ratione,
            dignissimos sequi pariatur dolor vitae nemo similique delectus,
            adipisci molestias consequuntur!
          </p>
        </div>
        <div className="about__scroller">
          <Grid className="h-[100%] w-[100%] flex space-x-6 justify-space-around">
            {[1, 2, 3].map((numer) => (
              <ContentCards
                key={numer}
                classItems={"flex-1 rounded-[12px]"}
              ></ContentCards>
            ))}
          </Grid>
        </div>
      </section>
      <section id="logins" className="flex justify-center items-center">
        {/* <div className="w-[40%]">
          <span>Items title</span>
        </div> */}
        <div className="logins__cards flex w-[60%] space-x-6 p-4">
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
