# Design Guidelines: NATURMEGA Consulting Proposal Website

## Design Approach
**One-Page Professional Document Presentation** - Single scroll experience with elegant, corporate aesthetic inspired by premium presentation decks. Focus on clarity, hierarchy, and sophistication befitting a confidential executive proposal.

## Color Palette (Mandatory)
- **Primary Deep Blue**: #082053 (headers, accents, footer background)
- **Medium Blue**: #306ab0 (interactive elements, hover states)
- **Soft Beige/Cream**: #faf6f1 (main backgrounds, alternating sections)
- **Pastel Blue**: #dee9f6 (section backgrounds, subtle highlights)
- **Very Light Blue**: #f3f9ff (card backgrounds, alternating sections)
- **Light Cream**: #fffcf7 (text on dark backgrounds)
- **White**: #ffffff (clean sections)
- **Elegant Dark Beige**: #ded6cb (borders, dividing lines)

## Typography System
**Font Family**: Parkinsans (Google Fonts) exclusively
- **Large Titles/Headers**: Parkinsans 700-800, large scale
- **Section Titles**: Parkinsans 600, medium-large scale
- **Body Text**: Parkinsans 400-500, comfortable reading size
- **Small Print**: Parkinsans 400, reduced size for disclaimers

## Layout Architecture

**Spacing System**: Use generous whitespace - Tailwind units of 8, 12, 16, 20, 24, 32 for consistent vertical rhythm

**Section Structure**:
1. **Portada/Cover**: Full viewport height, centered content, #faf6f1 background with confidentiality disclaimer at bottom in small text
2. **Tabla de Contenido**: Clean index with clickable navigation items, light background (#f3f9ff)
3. **Análisis Situación Actual**: Grid of 5 cards (2-3 columns on desktop, single column mobile) with soft borders in #ded6cb
4. **Pilares a Trabajar**: Horizontal chip/tag layout showcasing 5 pillars, #dee9f6 background
5. **Hallazgos Identificados**: 5 detailed cards with left border accent in #082053, white backgrounds, containing bullet lists under "Crítico" and "Riesgos" subheadings
6. **Planes de Acción**: Timeline or grid layout with placeholder action items
7. **Nuestra Propuesta Incluye**: Hero-style section with #082053 background, #fffcf7 text, icons for each benefit, prominent CTA button
8. **Forma de Pago**: Simple, clean layout with editable placeholder content
9. **Footer**: Minimal, #082053 background, white text, copyright info

## Component Specifications

**Cards**: 
- Soft rounded corners (border-radius: 12-16px)
- Thin borders in #ded6cb (1px)
- Subtle shadow for depth
- Padding: 24-32px
- Cards for Hallazgos should have 4px left border in #082053

**Buttons**:
- Primary: #306ab0 background, white text, rounded (8-12px)
- Hover: Slightly darker blue with smooth transition
- CTA in "Nuestra Propuesta": Larger, more prominent

**Navigation (Tabla de Contenido)**:
- Clean list items with hover effects
- Smooth scroll behavior to sections
- Clear visual feedback on interaction

**List Items**:
- Bullet points for Crítico and Riesgos sections
- Clear hierarchy with proper indentation
- Comfortable line-height for readability

## Interaction & Animation
- **Smooth Scroll**: Navigation clicks animate smoothly to sections
- **Fade-in on Scroll**: Sections gently fade in as they enter viewport
- **Slide-up Effect**: Cards and content blocks slide up subtly on scroll
- Keep animations minimal and professional - no distracting effects

## Responsive Behavior
- **Desktop**: Multi-column grids (2-3 columns for pillar cards), generous spacing
- **Tablet**: 2 columns max, adjusted spacing
- **Mobile**: Single column, stacked layout, increased touch-target sizes, maintained hierarchy

## Images
**No hero images required** - This is a document-style presentation relying on typography and structured content. Focus on clean, professional layout without decorative imagery.

## Visual Style Principles
- **Ample white space**: Breathing room between sections and elements
- **Clean hierarchy**: Clear distinction between titles, subtitles, and body text
- **Professional restraint**: Elegant and corporate, not flashy
- **Warm accessibility**: Beige tones add warmth to blue professionalism
- **Document quality**: Should feel like a premium printed proposal translated to web