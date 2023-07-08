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
        path: "/company/item1",
        title: "Item 1",
      },
      {
        path: "/company/item2",
        title: "Item 2",
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
    path: "/about",
    title: "About Us",
  },
];
