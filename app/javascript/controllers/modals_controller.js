import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="modals"
export default class extends Controller {
  connect() {}

  close(e) {
    // Prevent default action
    e.preventDefault();

    // make the popup modal disappear
    const modal = document.getElementById("modal");
    modal.innerHTML = "";

    modal.removeAttribute("src");
    modal.removeAttribute("complete");
  }
}
