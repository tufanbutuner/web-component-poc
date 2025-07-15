import { Banner } from "./Banner";
import ReactDOM from "react-dom/client";
import styles from "./Banner.css?inline";
import { type BannerType } from "./Banner";

class BannerComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const style = document.createElement("style");
    style.textContent = styles;
    this.shadowRoot!.appendChild(style);

    const type = (this.getAttribute("type") as BannerType) ?? "success";
    const header = this.getAttribute("header") ?? "Default Header";
    const content = this.getAttribute("content") ?? "Default Content";
    const root = ReactDOM.createRoot(this.shadowRoot!);
    root.render(<Banner type={type} header={header} content={content} />);
  }
}

if (!window.customElements.get("banner-component")) {
  window.customElements.define("banner-component", BannerComponent);
}

export default BannerComponent;
