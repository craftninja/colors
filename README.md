# Colors

### Why does this exist?

I bought my sweet baby a set of basic fingerpaints with the primary colors red, yellow, and blue, along with white, black, and brown. After she completed her first work, I though, gosh, what terrible colors to work with. I haven't taken color theory or anything, but I do know that the primaries evenly mixed turn out to be the color of diaper contents. Online tools were unwieldy or just plain wrong. I needed a simple color mixer that helps make a more beautiful palette.

### What do you want to do with this thing?

MVP:
* ~~clicking add or remove (RYB) increments / decrements the number of color drops in the "mix"~~
* clicking reset sets all (RYB) values to 0
* ~~clicking add or remove (RYB) calculates and displays the RGB value~~
* the displayed RGB value has a stepped gradient from black to white (as if you are mixing black and white into the mix)

Maybe in the futures:
* color-unwinder - pick a RBG color and the RYB proportions are calculated

### Get this thing up and running

1. Fork, clone, npm install
1. `$DEBUG=colors:* npm start`
