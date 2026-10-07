---
name: Bruno Miotto Websites
description: Dark gallery one-page for five production websites.
colors:
  void: "#1C1A17"
  ink: "#27241F"
  plate: "#2E2B27"
  mist: "#EBE6DC"
  mute: "#B4AEA4"
  dim: "#8F8A82"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.35rem, 1.1rem + 4.2vw, 4.35rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "-0.02em"
  meta:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  frame: "2px"
spacing:
  page: "32px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.void}"
    rounded: "{rounded.frame}"
    padding: "12px 20px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.mist}"
    rounded: "{rounded.frame}"
    padding: "12px 20px"
---

# Design system

One-page websites portfolio in Gallery Dark. Real client screenshots are the only color. The chrome is a warm charcoal projection room, not a SaaS landing page.

## Product context

Bruno Miotto, Caxias do Sul. Four production SPAs (Habilita, Stellamaris, Vektor, Nelci). Visitor mode is Experience: the work leads. Primary action is Solicitar orçamento on WhatsApp. Vektor has no live URL. Habilita is the only GitHub link.

## Principles

1. Screenshots occupy mural scale. UI recedes to wall labels.
2. One dark theme for the whole page. Never invert a section to paper-white.
3. Color does not compete with the four client brands. No gold luxury accent, no neon.
4. One inverted plate CTA. Same label everywhere: Solicitar orçamento.
5. Each case is a different room (bleed, split, terminal, quiet). Do not clone one card template.
6. Corners stay at 2px. Frames are photographs, not cards.

## Color

Ground `oklch(0.12 0.005 80)`. Type `oklch(0.93 0.012 85)`. Captions `oklch(0.74 0.014 80)`. Do not use GitHub `#0D1117` or navy `#0A192F`.

## Typography

Archivo Variable for display and body. IBM Plex Mono for indices, badges, EXIF captions, metrics. Body measure about 65ch. Display via `clamp`, never a raw 8xl.

## Components

- Topbar 64px, one line, solid void.
- Hero: left wall-label + projected covers. Pitch lives below the first viewport.
- Index: typographic rows 01–05, no thumbnails.
- Filmstrip: horizontal snap of every capture. Opens lightbox.
- Lightbox: fullscreen void, keyboard, focus trap, hides chrome.
- Contact: one CTA, four channels, copyright.

## Elevation

No drop shadows. Separation is hairline `mist/10` and space. Depth comes from the photographs.

## Do not

Glass cards, three equal columns, purple mesh, Inter, emoji icons, fake screenshots, a second contact label, light sections, neon, or rounding above 2px on frames.
