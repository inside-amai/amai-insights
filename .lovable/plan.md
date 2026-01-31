

## Add Glowing Border Tracer Animation to "Watch Demo Video" Button

### Overview
Add an eye-catching animated effect where a glowing dot continuously traces around the border of the "Watch Demo Video" button on the /thesis page, leaving a fading trail behind it.

### Technical Approach

**File 1: `src/index.css`**

Add new CSS keyframes and utility class for the border tracer animation:

```css
/* Border tracer animation for highlight buttons */
@keyframes border-trace {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}

.border-tracer-button {
  position: relative;
  overflow: visible;
}

.border-tracer-button::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 6px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(166, 252, 252, 0.8) 50%, 
    transparent 100%
  );
  background-size: 50% 100%;
  animation: border-trace-rotate 3s linear infinite;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: 1px;
  pointer-events: none;
}

@keyframes border-trace-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

**File 2: `src/pages/Thesis.tsx`**

Create a new `GlowingButton` component that wraps the button with an SVG-based tracer dot animation:

```tsx
// New component around line 63 (after SlideDivider)
const GlowingButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white/10 border border-white/30 rounded text-xs tracking-[0.15em] uppercase text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 overflow-visible"
    >
      {/* Glowing tracer dot with trail */}
      <span 
        className="absolute w-2 h-2 rounded-full bg-[#A6FCFC] shadow-[0_0_8px_4px_rgba(166,252,252,0.6),0_0_16px_8px_rgba(166,252,252,0.3)]"
        style={{
          offsetPath: 'rect(0 100% 100% 0 round 4px)',
          animation: 'border-trace 4s linear infinite',
        }}
      />
      {/* Trail effect using CSS blur and offset timing */}
      <span 
        className="absolute w-3 h-3 rounded-full bg-[#A6FCFC]/40 blur-sm"
        style={{
          offsetPath: 'rect(0 100% 100% 0 round 4px)',
          animation: 'border-trace 4s linear infinite',
          animationDelay: '-0.1s',
        }}
      />
      <span 
        className="absolute w-4 h-4 rounded-full bg-[#A6FCFC]/20 blur-md"
        style={{
          offsetPath: 'rect(0 100% 100% 0 round 4px)',
          animation: 'border-trace 4s linear infinite',
          animationDelay: '-0.2s',
        }}
      />
      {children}
    </a>
  );
};
```

Update the button on line 1054 to use this new component:

```tsx
// Replace the existing <a> tag with:
<GlowingButton href="https://youtu.be/qLEnRNELErg">
  Watch Demo Video
</GlowingButton>
```

### Visual Effect

| Element | Description |
|---------|-------------|
| Main dot | Bright cyan (#A6FCFC) 8px circle with glowing shadow |
| Trail dot 1 | 12px circle at 40% opacity with slight blur, offset by 0.1s |
| Trail dot 2 | 16px circle at 20% opacity with more blur, offset by 0.2s |
| Animation | 4-second loop tracing the button's rounded rectangle border |

### Key CSS Property: `offset-path`

The `offset-path` property allows an element to follow a path - we use `rect(0 100% 100% 0 round 4px)` to trace the button's border with rounded corners. Combined with `offset-distance` animated from 0% to 100%, this creates the tracing effect.

### Browser Support Note

`offset-path` has excellent support in modern browsers (Chrome 55+, Firefox 72+, Safari 16+). The effect will gracefully degrade in older browsers - the button will still work, just without the animation.

