import React from "react";
import Container from "./Container"
import Nav_menu_desktop from "./Nav_menu_desktop"
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  {label: "logo", href: "#home"},
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "ContactMe", href: "#contact" },
];

function HeaderComponent() {
     const [open, setOpen] = React.useState(false);
  return (
  <header className="absolute mx-auto w-full md:mt-10">
    
    <Container className="relative flex items-center justify-between
        min-h-21.5
        md:rounded-full
        px-10
        lg:px-20
        xl:px-4
        bg-[#0f0f0f]
        ">
      
       
       
        {/* Center: Links (Desktop) */}
       <Nav_menu_desktop navItems={navItems}/>

       
        <div className="flex xl:hidden items-center justify-between w-full gap-3">
          {/* CTA (Desktop) */}
          <a href="/">
          <img src="/Logo.svg" alt="" className="w-15"/></a>
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className=" inline-flex items-center justify-center h-10 px-3 rounded-md  text-sm relative "
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
           
            {!open ?<IoMenu className="text-4xl text-primary"/>:  <IoMdClose className="text-4xl text-primary"/>} 
          
          </button>
        </div>
         {open && (
        <div id="mobile-nav" className="absolute left-0 top-full xl:hidden shadow-xl  w-full bg-white  z-50">
          <Container className="py-4">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                item.label=="logo"?"":<a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className=" py-2 text-sm text-muted hover:text-foreground transition "
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center h-10 px-4 rounded-md bg-primary text-white text-sm font-medium  "
              >
                Hire me
              </a>
            </nav>
          </Container>
        </div>
      )}
      </Container>

      {/* Mobile Nav Panel */}
     
</header>
 
  )
}

export default HeaderComponent
