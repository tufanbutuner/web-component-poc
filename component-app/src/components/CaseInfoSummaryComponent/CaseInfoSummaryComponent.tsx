import { CaseInfoSummary } from "./CaseInfoSummary";
import ReactDOM from "react-dom/client";
import { type CaseInfoType } from "../../schemas/caseInfo";

class CaseInfoSummaryComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const caseInfo = JSON.parse(
      this.getAttribute("case-info") || "{}"
    ) as CaseInfoType;
    const root = ReactDOM.createRoot(this.shadowRoot!);
    root.render(<CaseInfoSummary caseInfo={caseInfo} />);
  }
}

if (!window.customElements.get("case-info-summary-component")) {
  window.customElements.define(
    "case-info-summary-component",
    CaseInfoSummaryComponent
  );
}

export default CaseInfoSummaryComponent;
