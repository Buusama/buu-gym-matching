import { defineStore } from "pinia";

export const useTopMenuStore = defineStore("topMenu", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "home",
        title: "Home",
      },
      "devider",
      {
        icon: "UserIcon",
        title: "Hội Viên",
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
