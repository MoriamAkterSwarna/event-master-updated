// export const navData = [
//     {
//       path: "/",
//       title: "Home",
//     },
//     {
//       path: "/company",
//       title: "Company",
//     },
//     {
//         path: "/events",
//         title: "Events",
//       },
//       {
//         path: '/categories',
//         title: "Categories"
//       },
//     {
//         path:"/about",
//         title: "About Us"
//     }
//   ];

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
    path: "/categories",
    title: "Categories",
    dropdown: [
      {
        path: "/categories/item1",
        title: "Item 1",
      },
      {
        path: "/categories/item2",
        title: "Item 2",
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
  // {
  //   path:"/registerEvent",
  //   title: "Register An Event"
  // }
];
