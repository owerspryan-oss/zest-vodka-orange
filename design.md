# Design System Document: Still Bold

## 1. Overview & Creative North Star

### The Creative North Star: "Liquid Precision"
This design system is built to mirror the product it represents: a premium, non-carbonated vodka orange. The experience must feel heavy yet fluid, grounded yet vibrant. We are moving away from the "bubbly," hyper-active UI patterns of typical beverage brands and toward a "Liquid Precision" aesthetic—an editorial-style digital experience characterized by deep obsidian depths, ultra-smooth transitions, and high-energy citrus accents.

**Breaking the Template:**
To achieve a signature feel, we reject the standard rigid grid. We embrace **intentional asymmetry**—offsetting imagery and typography to create a sense of natural flow. Elements should feel like they are floating in a dark, viscous medium rather than snapped to a box. Use overlapping layers and high-contrast typography scales to guide the eye through a narrative, not just a list of features.

---

## 2. Colors

The palette is anchored in the contrast between the infinite dark of 'Obsidian' and the electric energy of 'Zest' orange.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. In this system, boundaries are liquid. Separation must be achieved exclusively through background color shifts. For example, a `surface-container-low` section should transition into a `surface` background via a soft vertical gradient or a hard color-block shift—never a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers stacked in deep space.
* **Base:** `surface` (#131313) is your infinite void.
* **Depth:** Use `surface-container-lowest` (#0E0E0E) for recessed areas and `surface-container-high` (#2A2A2A) for elevated content cards.
* **Nesting:** Place `surface-container-lowest` cards on a `surface-container-low` section to create a soft, natural "recessed" feel that mimics the smoothness of the drink's texture.

### The "Glass & Gradient" Rule
Flat color is the enemy of premium depth.
* **Signature Textures:** Use subtle radial gradients transitioning from `primary` (#FFB693) to `primary-container` (#FF6B00) for hero CTAs and focal points.
* **Glassmorphism:** For floating navigation or modal overlays, use semi-transparent surface colors with a high `backdrop-blur`. This allows the "Zest" orange to bleed through from the background, creating a frosted, chilled glass effect.

---

## 3. Typography

The typography strategy relies on the tension between the futuristic, technical feel of **Space Grotesk** and the sophisticated, readable nature of **Manrope**.

* **Display & Headline (Space Grotesk):** Used for bold, "Still" statements. The wide apertures and geometric forms of Space Grotesk convey a modern, sleek authority. Use `display-lg` (3.5rem) for hero messaging to command immediate attention.
* **Body & Title (Manrope):** Used for the "story." Manrope provides a premium, editorial balance to the technical headlines. Its clean lines ensure readability even against high-contrast backgrounds.
* **Visual Hierarchy:** The massive scale difference between `display-lg` and `body-md` is intentional. It forces a rhythm of "Bold Impact" followed by "Quiet Detail," mimicking the sensory experience of a bold flavor followed by a smooth finish.

---

## 4. Elevation & Depth

We avoid traditional "material" shadows in favor of **Tonal Layering**.

* **The Layering Principle:** Depth is achieved by stacking the surface-container tiers. High-priority content "floats" by being assigned a lighter surface token (e.g., `surface-bright`), while background elements sit in `surface-dim`.
* **Ambient Shadows:** If a floating element (like a product can) requires a shadow, it must be an **Ambient Glow**. Use a large blur (60px+) and low-opacity (6%) shadow tinted with the `primary-container` color (#FF6B00) rather than black. This simulates the orange liquid reflecting light onto the obsidian surface.
* **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use a "Ghost Border." Apply the `outline-variant` token at **15% opacity**. 100% opaque borders are strictly forbidden as they interrupt the "fluid" brand essence.

---

## 5. Components

### Buttons
* **Primary:** Full roundness (`9999px`). Background: Gradient from `primary` to `primary-container`. Text: `on-primary-fixed` (#351000). No border.
* **Secondary:** Full roundness. `Ghost Border` (outline-variant at 20%). Text: `primary`.
* **Interactions:** On hover, the button should "swell" slightly (scale: 1.05) rather than just changing color, maintaining the organic feel.

### Input Fields & Containers
* **Shape:** Always use `rounded-full` or `rounded-xl` (3rem) for larger containers.
* **Style:** Use `surface-container-lowest` as the field background to create a "puddle" effect where the user inputs data.

### Lists & Cards
* **Constraint:** Forbid the use of divider lines.
* **Execution:** Separate list items using `spacing-6` (2rem) of vertical white space or by alternating between `surface-container-low` and `surface-container-high` backgrounds.

### Signature Component: The "Fluid Scroll" Indicator
A custom pill-shaped element using `surface-container-highest` with a slow-pulsing `primary-container` icon, signaling the transition between editorial sections without breaking the obsidian flow.

---

## 6. Do's and Don'ts

### Do
* **Do** use massive amounts of negative space (`spacing-20` and `spacing-24`) to emphasize the "Still" aspect of the brand.
* **Do** use fluid, organic shapes for image masks to avoid the "boxy" corporate look.
* **Do** ensure all typography has a line-height that feels "breathable" (1.4 to 1.6 for body text).
* **Do** use high-quality, high-contrast photography of liquids and obsidian textures.

### Don't
* **Don't** use sharp corners. Everything must feel as smooth as a non-carbonated drink.
* **Don't** use "vibrant" animations. Motion should be slow, eased (cubic-bezier), and "heavy."
* **Don't** use pure white (#FFFFFF). Use `on-background` (#E5E2E1) for a softer, more premium ivory-touch against the dark theme.
* **Don't** include any patterns that resemble bubbles, fizz, or grain. The visual language must remain "Still."