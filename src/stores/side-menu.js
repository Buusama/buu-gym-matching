import { defineStore } from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "home",
        title: "Home",
      },
      "devider",
      {
        icon: "HomeIcon",
        title: "Page 2",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-page-2-1",
            title: "Bitacora Recepción"
          },
          {
            icon: "",
            pageName: "side-menu-page-2-2",
            title: "Calendario Reservas"
          },
          {
            icon: "",
            pageName: "side-menu-page-2-3",
            title: "Calendario Amenidades"
          }
        ]
      },
      
    ],
  }),
});
