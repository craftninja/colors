# Colors

### [Paint Color Mixer](https://paint-color-mixer.herokuapp.com/)

### Why does this exist?

I bought my sweet baby a set of basic fingerpaints with the primary colors red, yellow, and blue, along with white, black, and brown. After she completed her first work, I though, gosh, what terrible colors to work with. I haven't taken color theory or anything, but I do know that the primaries evenly mixed turn out to be the color of diaper contents. Online tools were unwieldy or just plain wrong. I needed a simple color mixer that helps make a more beautiful palette.

### What do you want to do with this thing?

MVP:
* ~~clicking add or remove (RYB) increments / decrements the number of color drops in the "mix"~~
* ~~clicking Paint Mixer sets all (RYB) values to 0~~
* ~~clicking add or remove (RYB) calculates and displays the RGB value~~
* the displayed RGB value has a stepped gradient from black to white (as if you are mixing black and white into the mix)

Maybe in the futures:
* color-unwinder - pick a RBG color and the RYB proportions are calculated
* colors related to selected color can be shown, RYB proportions are calculated (see [Adobe Kuler](https://color.adobe.com/create/color-wheel/?base=2&rule=Compound&selected=3&name=My%20Color%20Theme&mode=rgb&rgbvalues=0.15999999999999998,0.6834176349962946,0.8,0.42,0.5672112098427078,0.6,0.29999999999999993,1,0.7409090909092584,1,0.5648011363636442,0.5499999999999999,0.8,0.15999999999999998,0.4078268398264481&swatchOrder=0,1,2,3,4)])
  * analagous
  * monochromatic
  * triad
  * complementary
  * compound?
* user login
* users can save and name colors (displayed with proportions of RYB)
* users have named palettes of saved colors

### Get this thing up and running

1. Fork, clone, npm install
1. `$DEBUG=colors:* npm start`

### Props

This library is being used in the ryb -> rgb calculation.

https://github.com/bahamas10/node-ryb2rgb
