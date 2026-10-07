---
name: Bruno Miotto Websites
description: Midnight portfolio. Serif headlines, copper labels, screenshots in a bento.
colors:
  obsidian: "#000000"
  onyx: "#040406"
  carbon: "#121317"
  graphite: "#1c1d22"
  slate: "#2e3038"
  steel: "#777a88"
  fog: "#9194a1"
  mist: "#acafb9"
  bone: "#e2e3e9"
  paper: "#ffffff"
  copper: "#cc9166"
  ink: "#000000"
typography:
  display:
    fontFamily: "SF Pro Display, SF Pro Text, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "clamp(40px, 6vw, 80px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  heading:
    fontFamily: "SF Pro Display, SF Pro Text, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "clamp(32px, 4vw, 48px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.003em"
  title:
    fontFamily: "SF Pro Display, SF Pro Text, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.13
    letterSpacing: "0.004em"
  lede:
    fontFamily: "SF Pro Text, SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    letterSpacing: "-0.02em"
  eyebrow:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.02em"
rounded:
  card: "10px"
  pill: "9999px"
  nav: "2px"
spacing:
  page: "1216px"
  section: "160px"
  case: "105px"
  gap: "8px"
components:
  button-primary:
    backgroundColor: "#0071e3"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
    height: "40px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
    height: "40px"
---

# Design System: Bruno Miotto Websites

## Overview

**Creative North Star: "Midnight vault with gilded ledger lines"**

A portfolio page on one continuous obsidian canvas. Playfair Display carries headlines at 36px and above. Inter carries navigation, body, and buttons. Copper is only the eyebrow and the quiet link. The white pill is the single loud action, Solicitar orçamento, and it lives in the header.

Screenshots are the content. They sit in a bento, large frame first, then pairs, with a 10px radius and a graphite hairline. Clicking a frame opens the capture at its own size.

**Key Characteristics:**

- Obsidian page, onyx image wells, graphite hairlines
- Playfair for display, Inter for UI
- Copper eyebrows, one white pill
- Bento of real site captures
- No drop shadows

## Colors

Near-black with a faint blue undertone. Copper is the only chromatic accent.

### Primary

- **Paper** (#ffffff): Headlines, the quote button fill, active nav.
- **Ink** (#000000): Text on the white pill.
- **Copper** (#cc9166): Eyebrows and the LinkedIn link.

### Neutral

- **Obsidian** (#08080a): Page canvas.
- **Onyx** (#040406): Image well behind a capture.
- **Graphite** (#1c1d22): Hairline borders and dividers.
- **Slate** (#2e3038): Scrollbar thumb.
- **Steel** (#777a88): Legal line.
- **Fog** (#9194a1): Lede, descriptions, inactive nav.
- **Mist** (#acafb9): Year.
- **Bone** (#e2e3e9): Default body tone.

### Named Rules

**The One Pill Rule.** The white filled button appears once, in the header. Other actions are ghost pills or copper links.

**The Copper Punctuation Rule.** Copper marks category labels and one editorial link. It does not fill buttons or large type.

## Typography

**Display Font:** Playfair Display Variable, standing in for Ivy Presto.
**Body Font:** Inter Variable.
**Label/Mono Font:** none.

**Character:** High-contrast serif for the ledger headline, quiet sans for everything you operate.

### Hierarchy

- **Display** (400, clamp 52–88px, line-height 1, tracking 0.01em): Hero title.
- **Heading** (400, clamp 44–64px, 1.13): Section titles.
- **Title** (400, clamp 36–52px, 1.13): Project names.
- **Lede** (400, 20px, 1.38, −0.04em): Hero subcopy, in Fog.
- **Body** (400, 16px, 1.5): Descriptions, in Fog.
- **Label** (500, 14px): Nav, buttons, year.
- **Eyebrow** (600, 13px, −0.02em): Copper category line.

### Named Rules

**The Serif Threshold Rule.** Playfair is for headings at 28px and above. Inter never sets those headlines.

## Layout

Content width is 1216px. Sections separate by 160px on desktop and 96px below 900px. Cases inside the project list separate by 105px. The hero is two columns: serif title and stats on the left, one capture on the right. The bento is six columns, the first frame spanning four. Below 900px everything stacks to one column.

## Elevation & Depth

Flat. Separation is surface color and a 1px graphite line. No drop shadows.

### Named Rules

**The Hairline Rule.** Edges are 1px #1c1d22. Do not lift cards with shadow.

## Shapes

Buttons and the close control are pills. Captures use a 10px radius. Nav hover targets use a 2px radius.

## Components

### Buttons

- **Primary:** White pill, black 14px Inter 500, padding 10px 20px. Header only.
- **Ghost:** 1px white outline, white text, same pill. Ver site and the contact action.
- **Hover / Focus:** Primary shifts to Bone. Ghost fills Carbon. Focus is a 2px white outline, 3px offset.

### Navigation

Sticky obsidian bar, 72px, hairline under it. Brand left, section links in Fog, white pill right. Links turn Paper on hover.

### Bento frame

10px radius, onyx ground, graphite border, aspect 1400/690, image covered from the top. The first frame of a case spans four columns. Click opens the file at intrinsic size on an onyx overlay.

## Do's and Don'ts

### Do:

- **Do** keep the screenshots large and open them at file size.
- **Do** use the existing project names, badges, years, and hub descriptions.
- **Do** keep Solicitar orçamento on WhatsApp.

### Don't:

- **Don't** add a second white pill in the same view as the header.
- **Don't** put stack lists or architecture essays back on the page.
- **Don't** use drop shadows, gradients over the captures, or a light page canvas.
- **Don't** set Inter above 20px for body copy.
