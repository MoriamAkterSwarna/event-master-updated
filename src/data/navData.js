export const navData = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/company",
    title: "Company",
    dropdown: [
      {
        path: "/company/process",
        title: "Our Process",
      },
      {
        path: "/company/about",
        title: "About",
      },
      {
        path: "/company/team",
        title: "Join The Team",
      },
    ],
  },
  
  {
    path: "/events",
    title: "Events",
  },
  {
    path: "/contact",
    title: "Contact Us",
  },
 
];
export const afterLoginNavData = [
  ...navData,
  // {
  //   path: "/dashboard",
  //   title: "Dashboard",
  // },
];

export const beforeLoginNavData = [
  ...navData,
  {
    path: "/signup",
    title: "Signup",
  },
  {
    path: "/login",
    title: "Login",
  },
];

