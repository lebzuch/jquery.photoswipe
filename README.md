# Jquery plugin for [PhotoSwipe](http://photoswipe.com)

To use `jquery.photoswipe.js` include the following files in the `<head>` of your markup

```
	<script type='text/javascript' src='path/to/jquery.min.js'></script>
    
    <link rel='stylesheet' href='path/to/photoswipe.css' type='text/css' media='all' />
    <link rel='stylesheet' href='path/to/default-skin/default-skin.css' type='text/css' media='all' />
    <script type='text/javascript' src='path/to/photoswipe.js'></script>
    <script type='text/javascript' src='path/to/photoswipe-ui-default.js'></script>
    
    <script type='text/javascript' src='path/to/jquery.photoswipe.js'></script>

```

In your markup make sure to set the `data-size` attirbute with the `[width]x[height]` of the image

```
    <h1>Gallery 1</h1>
    <div>
            <a href="http://lorempixel.com/800/600/food/1/" data-size="800x600" data-title="<p>Opis</p><small>opis mały</small>" class="photoswipe-gallery-1">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/1/"/>
            </a>
            <a href="http://lorempixel.com/800/600/food/2/" data-size="800x600" class="photoswipe-gallery-1">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/2/"/>
            </a>
            <a href="http://lorempixel.com/800/600/food/3/" data-size="800x600" class="photoswipe-gallery-1">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/3/"/>
            </a>
            <a href="http://lorempixel.com/800/600/food/4/" data-size="800x600" class="photoswipe-gallery-1">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/4/"/>
            </a>
    </div>
    <h1>Gallery 2</h1>
    <div class="photoswipe-gallery">
            <a href="http://lorempixel.com/800/600/food/5/" data-size="800x600">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/5/"/>
            </a>
            <a href="http://lorempixel.com/800/600/food/6/" data-size="800x600">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/6/"/>
            </a>
            <a href="http://lorempixel.com/800/600/food/7/" data-size="800x600">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/7/"/>
            </a>
            <a href="http://lorempixel.com/800/600/food/8/" data-size="800x600">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/8/"/>
            </a>
    </div>
    <h1>Gallery 3</h1>
    <div class="photoswipe-gallery">
            <a href="http://lorempixel.com/800/600/food/5/" data-size="800x600">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/5/"/>
            </a>
            <a href="http://lorempixel.com/800/600/food/6/" data-size="800x600">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/6/"/>
            </a>
            <a href="http://lorempixel.com/800/600/food/7/" data-size="800x600">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/7/"/>
            </a>
            <a href="http://lorempixel.com/800/600/food/8/" data-size="800x600">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/8/"/>
            </a>
    </div>

```

Then in your javascript select all anchors you want in a single gallery and call the `photoswipe({options})` jQuery function

```
	$(".photoswipe-gallery-1").photoswipe();

    // Seperate Galleries
    $('.photoswipe-gallery').each(function(i) { // the containers for the other two galleries
        var links = $(this).find('a');
        links.photoswipe({
            bgOpacity: 0.8,
            loop: true,
            shareEl: false
        });
    });

```

# Example & Development

Once downloaded repository run `bower install` in the root directory to install dependencies for the example in `index.html`.