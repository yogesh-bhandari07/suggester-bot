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
}
export const NAVBAR_LINKS: Link[] = [
  { url: "/", text: "Home", icon: "home", is_disabled: false },
];
export const NAVBAR_BUTTONS: ButtonLink[] = [
  {
    url: "/auth/register",
    text: "Register",
    bgColor: "bg-yellow-400",
    hoverBgColor: "hover:bg-yellow-300",
    textColor: "text-yellow-900",
    hoverTextColor: "hover:text-yellow-800",
  },
  {
    url: "/auth/login",
    text: "Login",
    bgColor: "bg-green-400",
    hoverBgColor: "hover:bg-green-300",
    textColor: "text-green-900",
    hoverTextColor: "hover:text-green-800",
  },
];
