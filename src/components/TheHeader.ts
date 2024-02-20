import { Component } from "../core/core";

interface State {
  [key: string]: unknown;
  menus: {
    name: string;
    href: string;
  }[];
}

export default class TheHeader extends Component {
  public state!: State;
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Search",
            href: "#/",
          },
          {
            name: "Movie",
            href: "#/movie?id",
          },
          {
            name: "About",
            href: "#/about",
          },
        ],
      },
    });
    window.addEventListener("popstate", () => {
      this.render();
    });
  }
  render() {
    this.el.innerHTML = /* HTML */ `
      <a href="#/" class="logo"> <span>OMDbAPI</span>.COM </a>
      <nav>
        <ul>
          ${this.state.menus
            .map((menu) => {
              const href = menu.href.split("?")[0];
              const hash = location.hash.split("?")[0];
              const isActive = href === hash;
              return /* HTML */ `
                <li>
                  <a class="${isActive ? "active" : ""}" href="${menu.href}"
                    >${menu.name}
                  </a>
                </li>
              `;
            })
            .join("")}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://fabric0de.github.io/assets/img/avatar.png" alt="User"
      /></a>
    `;
  }
}
