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

In your markup add a `rel` attribute with a value starting with `photoswipe-` to the `<a>` that you wish to be in the photoswipe gallery.
The you can group links in a gallery by using the same suffix in your `rel` attribute. Make sure to set the `data-size` attirbute with the `[width]x[height]` of the image

```
    <h1>Gallery1</h1>
    <div>
            <a href="http://lorempixel.com/800/600/food/1/" data-size="800x600" data-caption="<p>Opis</p><small>opis mały</small>" rel="photoswipe-gallery1">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/1/"/>
            </a>
            <a href="http://lorempixel.com/800/600/food/2/" data-size="800x600" rel="photoswipe-gallery1">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/2/"/>
            </a>
            <a href="http://lorempixel.com/800/600/food/3/" data-size="800x600" rel="photoswipe-gallery1">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/3/"/>
            </a>
            <a href="http://lorempixel.com/800/600/food/4/" data-size="800x600" rel="photoswipe-gallery1">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/4/"/>
            </a>
    </div>
    <h1>Gallery2</h1>
    <div>
            <a href="http://lorempixel.com/800/600/food/5/" data-size="800x600" rel="photoswipe-gallery2">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/5/"/>
            </a>
            <a href="http://lorempixel.com/800/600/food/6/" data-size="800x600" rel="photoswipe-gallery2">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/6/"/>
            </a>
            <a href="http://lorempixel.com/800/600/food/7/" data-size="800x600" rel="photoswipe-gallery2">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/7/"/>
            </a>
            <a href="http://lorempixel.com/800/600/food/8/" data-size="800x600" rel="photoswipe-gallery2">
                <img class="img-responsive" src="http://lorempixel.com/800/600/food/8/"/>
            </a>
    </div>

```

Then in your javascript select all anchors with the correctly set `rel` attribute and call the `photoswipe({options})` jQuery function

```
	$("a[rel^='photoswipe']").photoswipe();

```

# Example

Once downloaded repository run `bower install` in the root directory to install dependencies for the example in `index.html`.