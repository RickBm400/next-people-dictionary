"use client";
import "./landing.sass";
import Grid from "@mui/material/Unstable_Grid2";
import ContentCards from "@/components/ContentCards";

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
          <h1>COWORKING SPACE</h1>
        </div>
      </section>
      <section id="about" className="flex items-center">
        <div className="about__description flex flex-col">
          <h1 className="mb-auto">Olamundos</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit
            praesentium facere soluta possimus minus ut? Et quibusdam ratione,
            dignissimos sequi pariatur dolor vitae nemo similique delectus,
            adipisci molestias consequuntur!
          </p>
        </div>
        <div className="about__scroller">
          <Grid
            container
            className="h-[100%] w-[100%] flex items-stretch justify-space-around"
          >
            {[1, 2, 3].map((numer) => (
              <ContentCards key={numer}></ContentCards>
            ))}
          </Grid>
        </div>
      </section>
    </main>
  );
}
