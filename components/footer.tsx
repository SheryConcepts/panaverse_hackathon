import { Icons } from "@/components/icons"

export default function Footer() {
  return <>
    <div className="flex flex-col gap-y-8 md:flex-row gap-x-4 w-full py-8">
      <About />
      <Company />
      <Support />
      <Contact />
    </div>
    <FootNotes />
  </>
}

function About() {
  return <div className="flex flex-col flex-1 gap-y-8">
    <Icons.siteLogo />
    <div>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</div>
    <div className="flex flex-row gap-y-1 ">
      <Icons.twitter />
      <Icons.facebook />
      <Icons.linkedin />
    </div>
  </div >
}

function Company() {
  return <div className="flex flex-col flex-1 gap-y-4">
    <div>About</div>
    <div>Terms of Use</div>
    <div>Privacy Policy</div>
    <div>How it Works</div>
    <div>Contact Us</div>
  </div>
}

function Support() {
  return <div className="flex flex-col flex-1 gap-y-4">
    <div>Support Carrer</div>
    <div>24h Sevice</div>
    <div>Quick Chat</div>
  </div>
}

function Contact() {
  return <div className="flex flex-col flex-1 gap-y-4">
    <div>Whatsapp</div>
    <div>Support 24h</div>
  </div>
}

function FootNotes() {
  return (
    <div className="flex flex-wrap border-t-black border-t-2 justfiy-between items-center px-6 py-8 gap-x-6 gap-y-2 overflow justify-center">
      <div>
        Copyright © 2022 Dine Market
      </div>
      <div>
        Design by. Weird Design Studio
      </div>
      <div>
        Code by. shabrina12 on github
      </div>
    </div>
  )
}
