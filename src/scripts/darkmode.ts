export function toggle() {
    const current = window.localStorage.getItem("theme");

    let next = current === "dark" ? "light" : "dark";

    window.localStorage.setItem("theme", next);
    (document.querySelector(":root") as HTMLElement).dataset.theme = next;
}

export function init() {
    let preferred = "light";

    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        preferred = "dark";
    }

    const current = window.localStorage.getItem("theme") || preferred;
    (document.querySelector(":root") as HTMLElement).dataset.theme = current;
}
