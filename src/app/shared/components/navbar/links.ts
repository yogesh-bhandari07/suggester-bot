export interface Link {
  url: string;
  text: string;
  icon?: string;
  is_disabled: boolean;
}
export interface ButtonLink {
  url: string;
  text: string;
  bgColor: string;
  hoverBgColor: string;
  textColor: string;
  hoverTextColor: string;
  isAuthRequired:boolean;
}
export const NAVBAR_LINKS: Link[] = [
  { url: "/", text: "Home", icon: "home", is_disabled: false },
];
export const NAVBAR_BUTTONS: ButtonLink[] = [
  {
    url: "/auth/register",
    text: "Register",
    bgColor: "bg-[#67869f]",
    hoverBgColor: "hover:bg-[#67869f]",
    textColor: "text-white",
    hoverTextColor: "hover:text-gray-400",
    isAuthRequired:false
  },
  {
    url: "/auth/login",
    text: "Login",
    bgColor: "bg-[#334153]",
    hoverBgColor: "hover:bg-[#334153]",
    textColor: "text-white",
    hoverTextColor: "hover:text-gray-400",
    isAuthRequired:false
  },
];
