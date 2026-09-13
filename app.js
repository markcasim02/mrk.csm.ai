const themeToggle = document.querySelector(".theme-toggle");
const themeRoot = document.documentElement;
const themeMeta = document.querySelector('meta[name="theme-color"]');
function setTheme(theme, persist = true) {
  const light = theme === "light";
  themeRoot.dataset.theme = light ? "light" : "dark";
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(light));
    themeToggle.setAttribute(
      "aria-label",
      `Switch to ${light ? "dark" : "light"} mode`,
    );
    const label = themeToggle.querySelector(".theme-toggle-text");
    if (label) label.textContent = light ? "Dark" : "Light";
  }
  if (themeMeta) themeMeta.setAttribute("content", light ? "#f4f7f8" : "#10161a");
  if (persist) {
    try {
      localStorage.setItem("portfolio-theme", light ? "light" : "dark");
    } catch {}
  }
}
setTheme(themeRoot.dataset.theme === "light" ? "light" : "dark", false);
themeToggle?.addEventListener("click", () => {
  setTheme(themeRoot.dataset.theme === "light" ? "dark" : "light");
});

const menu = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
function closeMenu() {
  menu.setAttribute("aria-expanded", "false");
  navigation.classList.remove("open");
}
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("open", open);
});
navigation.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    closeMenu();
    const target = document.querySelector(link.hash);
    if (target) {
      target.tabIndex = -1;
      target.focus({ preventScroll: true });
    }
  }),
);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menu.focus();
  }
});
const navLinks = [...navigation.querySelectorAll("a")];
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          const active = link.hash === "#" + entry.target.id;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }
    });
  },
  { rootMargin: "-10% 0px -65% 0px" },
);
navLinks.forEach((link) => {
  const section = document.querySelector(link.hash);
  if (section) observer.observe(section);
});
const tabs = [...document.querySelectorAll(".tool-tab")];
function selectTab(tab) {
  tabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
    const panel = document.getElementById(item.getAttribute("aria-controls"));
    panel.hidden = !selected;
    panel.classList.toggle("active", selected);
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (event) => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft")
      next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectTab(tabs[next]);
      tabs[next].focus();
    }
  });
});
const dialog = document.querySelector("#lightbox");
const viewerImage = document.querySelector("#lightboxImg");
const caption = document.querySelector("#lightboxCap");
const groups = {};
let group, index, opener;
document.querySelectorAll(".shot").forEach((button) => {
  (groups[button.dataset.group] ??= []).push(button);
  button.addEventListener("click", () => {
    group = groups[button.dataset.group];
    index = group.indexOf(button);
    opener = button;
    renderImage();
    dialog.showModal();
    document.querySelector("#lightboxClose").focus();
  });
});
function renderImage() {
  const shot = group[index],
    image = shot.querySelector("img");
  viewerImage.src = image.dataset.full;
  viewerImage.alt = image.alt;
  caption.textContent = shot.querySelector(".shot-cap").textContent;
  document.querySelector("#imageCount").textContent =
    `${index + 1} / ${group.length}`;
  document.querySelector("#fullImage").href = image.dataset.full;
}
function step(delta) {
  index = (index + delta + group.length) % group.length;
  renderImage();
}
document
  .querySelector("#lightboxClose")
  .addEventListener("click", () => dialog.close());
document
  .querySelector("#lightboxPrev")
  .addEventListener("click", () => step(-1));
document
  .querySelector("#lightboxNext")
  .addEventListener("click", () => step(1));
dialog.addEventListener("close", () => opener?.focus({ preventScroll: true }));
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      dialog.close();
  }
});
dialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    event.preventDefault();
    step(1);
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    step(-1);
  }
  if (event.key === "Tab") {
    const controls = [...dialog.querySelectorAll("button,a[href]")];
    const first = controls[0],
      last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

// Keep the Hands-on Toolkit loop seamless as its first group grows.
document.querySelectorAll(".tools-strip:not(.ai-toolkit)").forEach((strip) => {
  const groups = [...strip.querySelectorAll(".tools-group")];
  if (groups.length > 1) {
    groups.slice(1).forEach((group) => {
      group.innerHTML = groups[0].innerHTML;
    });
  }
});

// Each toolkit owns its pause state; hover/focus and reduced motion also pause it.
document.querySelectorAll(".tools-strip").forEach((strip) => {
  const button = strip.querySelector(".tools-pause");
  const label = strip.dataset.stripLabel || "tools";
  button.addEventListener("click", () => {
    const paused = button.getAttribute("aria-pressed") !== "true";
    strip.dataset.paused = String(paused);
    button.setAttribute("aria-pressed", String(paused));
    button.setAttribute(
      "aria-label",
      `${paused ? "Resume" : "Pause"} ${label} animation`,
    );
    button.firstElementChild.textContent = paused ? "▷" : "Ⅱ";
  });
});
