(function( $ ) {
    $.fn.photoswipe = function(options){
        var galleries = [],
            $this = this,
            _options = options,
            markup = '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--share" title="Share"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>';
        $(markup).appendTo('body');
        return this.each(function(){
            var $anchor = $(this),
                name = $anchor.attr('rel').split('-')[1],
                src = $anchor.attr('href'),
                size = $anchor.data('size').split('x'),
                caption = $anchor.data('caption'),
                itemExists = false;
            $.each(galleries,function(key,elem){
                if(elem.name === name){
                    itemExists = true;
                }
            });
            if(!itemExists){
                 galleries.push({
                    name: name,
                    items: []
                });
            }
            $.each(galleries,function(key,elem){
                if(elem.name === name){
                    var item = {
                        src: src,
                        w: parseInt(size[0],10),
                        h: parseInt(size[1],10),
                        title: caption,
                        el: $anchor.get(0)
                    }
                    $anchor.data('gallery-id',key);
                    $anchor.data('photo-id',elem.items.length);
                    elem.items.push(item);
                }
            });
            $anchor.on('click',function(e){
                e.preventDefault();
                var pswpElement = document.querySelectorAll('.pswp')[0];
                var galleryId = $anchor.data('gallery-id');
                var photoId = $anchor.data('photo-id');
                var items = galleries[galleryId].items;
                console.log(items);
                // define options (if needed)
                var options = {
                    // optionName: 'option value'
                    // for example:
                    index: photoId, // start at first slide
                    getThumbBoundsFn: function(index) {
                        // See Options->getThumbBoundsFn section of docs for more info
                        var thumbnail = items[index].el.children[0],
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect(); 

                        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                    }
                };
                $.extend(options,_options);
                var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
                gallery.init();
            });
        });
    };
}( jQuery ));