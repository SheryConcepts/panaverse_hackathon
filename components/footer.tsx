import { Icons } from "@/components/icons";

export default function Footer() {
  return (
    <>
      <div className="flex w-full flex-col gap-x-4 gap-y-8 py-8 text-sm text-gray-500 md:flex-row">
        <About />
        <div className="flex w-full flex-col gap-y-6 md:w-3/4 md:flex-row md:justify-evenly">
          <Company />
          <Support />
          <Contact />
        </div>
      </div>
      <FootNotes />
    </>
  );
}

function About() {
  return (
    <div className="flex w-full flex-col gap-y-8 md:w-1/4">
      <Icons.siteLogo />
      <div>
        Small, artisan label that offers a thoughtfully curated collection of
        high quality everyday essentials made.
      </div>
      <div className="flex flex-row gap-x-2 ">
        <Icons.twitter />
        <Icons.facebook />
        <Icons.linkedin />
      </div>
    </div>
  );
}

function Company() {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-8">
      <p className="text-lg font-bold tracking-wide text-gray-500">Company</p>
      <div className="space-y-2">
        <p className="">About</p>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>How it Works</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
}

function Support() {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-8">
      <p className="text-lg font-bold tracking-wide text-gray-500">Support</p>
      <div className="space-y-2">
        <p>Support Carrer</p>
        <p>24h Sevice</p>
        <p>Quick Chat</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-8">
      <p className="text-lg font-bold tracking-wide text-gray-500">Contact</p>
      <div className="space-y-2">
        <div>Whatsapp</div>
        <div>Support 24h</div>
      </div>
    </div>
  );
}

function FootNotes() {
  return (
    <div className="justfiy-between overflow text-sm flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t-2 border-t-black px-6 py-8">
      <div>Copyright © 2022 Dine Market</div>
      <div>Design by. Weird Design Studio</div>
      <div>
        Code by  <span className="font-bold italic">SheryConcpets</span> on
        Github
      </div>
    </div>
  );
}
