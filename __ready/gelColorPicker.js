"use strict";

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/*	23.02.2021	*/

/*	*	*	*	*	*	*	*	*	*	*/
const enehty_gelColorData = [
  {
    name: "Bílý",
    hex: "#ffffff"
  },
  {
    name: "Stříbrný",
    hex: "#dedede"
  },
  {
    name: "Šedá",
    hex: "#ababab"
  },
  {
    name: "Černá",
    hex: "#000000"
  },
  {
    name: "Námořnická modrá",
    hex: "#0c144f"
  },
  {
    name: "Zelený",
    hex: "#044d15"
  },
  {
    name: "Tyrkysový",
    hex: "#1b6b84"
  },
  {
    name: "Modrý",
    hex: "#2e95da"
  },
  {
    name: "Světle modrá",
    hex: "#a6dce8"
  },
  {
    name: "Smaragd",
    hex: "#48d1bc"
  },
  {
    name: "Máta",
    hex: "#aae8d1"
  },
  {
    name: "Růžový",
    hex: "#fbbdd6"
  },
  {
    name: "Šeřík",
    hex: "#c1b5d4"
  },
  {
    name: "Levandule",
    hex: "#9d7ad0"
  },
  {
    name: "Fuchsie",
    hex: "#c8328c"
  },
  {
    name: "Nachový",
    hex: "#612d6b"
  },
  {
    name: "Švestka",
    hex: "#44083c"
  },
  {
    name: "Hnědý",
    hex: "#4a1400"
  },
  {
    name: "Vínová",
    hex: "#730933"
  },
  {
    name: "Maroon",
    hex: "#9f070e"
  },
  {
    name: "Malina",
    hex: "#b80348"
  },
  {
    name: "Červené",
    hex: "#db1832"
  },
  {
    name: "Korál",
    hex: "#f66767"
  },
  {
    name: "Oranžový",
    hex: "#ed9962"
  },
  {
    name: "Broskev",
    hex: "#f4a8a8"
  },
  {
    name: "Krémová",
    hex: "#f4d7c9"
  },
  {
    name: "Nude",
    hex: "#c39983"
  },
  {
    name: "Khaki",
    hex: "#9d8f3d"
  },
  {
    name: "Béžový",
    hex: "#c7a365"
  },
  {
    name: "Zlatý",
    hex: "#d9c162"
  },
  {
    name: "Žlutá",
    hex: "#f4ff5e"
  }
];
/*	*	*	*	*	*	*	*	*	*	*/

class enehty_gelColorParser {
  constructor(selector) {
    _defineProperty(this, "setUp", () => {
      this.elem = document.querySelector(this.selector);

      if (!Boolean(this.elem)) {
        return 0;
      }

      this.box = this.elem.parentElement;
      this.box.classList.add("__enehty_gelSpecial"); //  Removal of the troublesome element

      this.showMore = this.elem.querySelector(".showmore");

      if (this.showMore) {
        this.showMore.remove();
        this.showMore = null;
      }

      this.list = this.elem.querySelector("ul");
      this.elems = [...this.list.querySelectorAll("li")];
      this.elems.forEach((elem) => this.addPropperClass(elem));
    });

    _defineProperty(this, "addPropperClass", (elem) => {
      const title = elem.querySelector("a").getAttribute("title");
      const color = enehty_gelColorData.filter(
        (e) => title.indexOf(e.name) !== -1
      );

      if (color.length > 1) {
        throw new Error("multiple colors to one element");
      }

      elem
        .querySelector("a")
        .classList.add(`__${color[0].hex.replace("#", "")}`);
    });

    _defineProperty(this, "toggleSmall", () => {
      this.list.classList.remove("__colors");
      this.list.style.display = "none";
      this.elem.style.display = "block";
      this.elem.append(this.list);
    });

    _defineProperty(this, "toggleLarge", () => {
      this.list.classList.add("__colors");
      this.list.style.display = "flex";
      this.elem.style.display = "none";
      this.box.prepend(this.list);
    });

    this.selector = selector;
    this.box = null;
    this.elem = null;
    this.elems = [];
    this.list = null;
    this.showMore = null;
    this.setUp();
  }
}
/*	*	*	*	*	*	*	*	*	*	*/

/**
const enehty_parsed = new enehty_gelColorParser('#filter_attribute_14');

    const media_change = window.matchMedia('(min-width: 992px)');
        if(media_change.matches)   {enehty_parsed.toggleLarge()}

    media_change.addEventListener('change', e => {
        if(e.matches)   {enehty_parsed.toggleLarge()}
        else            {enehty_parsed.toggleSmall()}
    });

**/

/**/

document.addEventListener("DOMContentLoaded", () => {
  const enehty_parsed = new enehty_gelColorParser("#filter_attribute_14");
  const media_change = window.matchMedia("(min-width: 992px)");

  if (media_change.matches) {
    enehty_parsed.toggleLarge();
  }

  media_change.addEventListener("change", (e) => {
    if (e.matches) {
      enehty_parsed.toggleLarge();
    } else {
      enehty_parsed.toggleSmall();
    }
  });
});
/**/
