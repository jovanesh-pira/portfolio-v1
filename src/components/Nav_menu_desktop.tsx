

type navItem={
    label: string, href: string
}
interface NavMenuDesktopProps {
  navItems: navItem[];
}
function Nav_menu_desktop({navItems}:NavMenuDesktopProps) {
   
   
  return (
   <>
    <nav className='hidden  xl:flex w-full flex-row gap-5 items-center justify-between'>
       {navItems.map(item=>{
        const isActive = item.label === "Home";
        return (item.label=="logo"?<a href={item.href}><img src="/Logo.svg" alt="" className="w-20"/></a>:<a href={item.href}   className={`
          px-10 py-5 text-[20px]  rounded-full transition: ;
          ${
            isActive
              ? "bg-primary text-white font-bold"
              : "text-white/70 hover:text-white"
          }
        `}>{item.label}</a>)
       })}
    </nav></>
  )
}

export default Nav_menu_desktop
