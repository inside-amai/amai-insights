# Sharpen the Hello Operator grid

## Approach
- Recreate the existing perspective grid as a scalable vector asset, matching its line spacing, convergence, central fade, and black background.
- Use the vector only in the **Hello, Operator.** section, keeping the current sideways orientation, side glows, opacity, section dimensions, and 18-second zoom pulse unchanged.
- Preserve the homepage hero artwork exactly as it is.

## Validation
- Compare the section at desktop and mobile sizes, including high-density screens, to confirm sharper lines without changing framing or text layout.
- Confirm the animation remains smooth and the page has no rendering errors.

## Technical note
The current 1920×1097 JPEG is rotated and enlarged from its shorter 1097px dimension, which causes visible interpolation on high-density displays. Vector lines avoid that resolution limit rather than merely sharpening or upscaling the existing JPEG.
