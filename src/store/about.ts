import { Store } from "../core/core";

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: "https://fabric0de.github.io/assets/img/avatar.png",
  name: "fabric0de / KimJungHyeon",
  email: "solee3013@gmail.com",
  blog: "https://fabric0de.github.io/",
  github: "https://github.com/fabric0de",
  repository: "",
});
