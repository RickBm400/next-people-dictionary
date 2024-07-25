"use client";
import "./landing.sass";

export default function Home() {
  return (
    <section id="landing" className="flex justify-center flex-col items-center">
      <nav className="landing__nav flex justify-end">
        <ul className="landing__nav__links flex">
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
      <div className="landing__container p-[24px] rounded-[24px] bg-[gray]">
        <h1>COWORKING SPACE</h1>
      </div>
    </section>
  );
}
