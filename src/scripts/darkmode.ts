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

    const saved = window.localStorage.getItem("theme");
    if (!saved) {
        window.localStorage.setItem("theme", preferred);
    }
    const current = saved || preferred;
    (document.querySelector(":root") as HTMLElement).dataset.theme = current;
}
