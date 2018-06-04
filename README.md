# toaster

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

props:

showToaster (bool) : displays the toaster when true, defaults to true

timer (Number): displays toaster for the given time in miliseconds.  If toaster is already open, it will close after the given time

bricks (bool: displays the brick animation

title (string): displays text above the bricks.  shown when !fail && !success, with or without bricks (h2)

message (string): displays text below the bricks shown when !fail && !success, with or without bricks(h4)

color (string) : green, red, yellow.  will default to green

success (bool): will display success checkmark and successmessage if !null

successMessage (string): displays text along with success checkmark

fail (bool): will display failure X and failMessage if !null

failMessage (string):  displays text along with fail X
