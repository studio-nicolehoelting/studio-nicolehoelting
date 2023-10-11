# Studio Nicole Hölting (Astro version)

## Vorraussetzungen

-   [Git](https://git-scm.com)
-   [NodeJS](https://nodejs.org/en/)
-   _[VS Code](https://code.visualstudio.com)_ (optional)
-   _[GitHub Desktop](https://desktop.github.com)_ (optional)

## Setup

```bash
git clone git@github.com:studio-nicolehoelting/studio-nicolehoelting.git
cd studio-nicolehoelting
```

## Bearbeitung

```bash
git pull
pnpm install
pnpm run dev
```

Dann bearbeiten.

```bash
git add *
git commit -M "Beschreibung"
git push
```

## Hinweise

-   Blogs/Projekte/etc können in den Unterordnern von `/src/content/` gefunden werden und dort hinzugefügt/bearbeitet/entfernt werden.
-   Bilder befinden sich im Ordner `/src/images/` und sind nach Kategorien in Unterordner eingeteilt.

## Schemata (Beispielhaft)

### Blog

```yml
ankündigung: true # erstellt noch keine Seite, kündigt nur den Erscheinungstermin und Titel an
titel: "Titel des Blogposts"
untertitel: "Beschreibung"
datum: 2023-10-12 # YYYY-MM-DD
bild: ../../pfad/zum/bild.jpg
```

Darunter dann die Zubereitung schreiben (Kann mit [Markdown](https://www.heise.de/mac-and-i/downloads/65/1/1/6/7/1/0/3/Markdown-CheatSheet-Deutsch.pdf) formattiert werden). Bilder mit `![Beschreibung](../../pfad/zum/bild)` hinzufügen.

**WICHTIG**: Vor und nach Bildern muss eine leere Zeile sein und der Pfad darf keine Leerzeichen und Umlaute enthalten (Ansonsten Datei/Ordner umbenennen und Pfad anpassen).
