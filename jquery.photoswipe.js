/*! PhotoSwipe jQuery - v0.1 - 2015-01-23
* Copyright (c) 2015 webzooh; */
(function( $ ) {
    $.fn.photoswipe = function(options){
        var galleries = [],
            _options = options,
            markup = '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--share" title="Share"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>';
        $(markup).appendTo('body');
        
        var init = function($this){
            $this.each(function(){
                var $anchor = $(this),
                    src = $anchor.attr('href'),
                    size = $anchor.data('size').split('x'),
                    caption = $anchor.data('caption');
                    name = $anchor.attr('rel').split('-')[1],
                    itemExists = false;
                if(size.length != 2){
                    throw SyntaxError("Missing data-size attribute.");
                }
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
                        $anchor.data('gallery-id',key+1);
                        $anchor.data('photo-id',elem.items.length);
                        elem.items.push(item);
                    }
                });
                $anchor.on('click',function(e){
                    e.preventDefault();
                    var gid = $anchor.data('gallery-id'),
                        pid = $anchor.data('photo-id');
                    openGallery(gid,pid);
                });
            });
        }
        
        var parseHash = function() {
            var hash = window.location.hash.substring(1),
            params = {};

            if(hash.length < 5) {
                return params;
            }

            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if(!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');  
                if(pair.length < 2) {
                    continue;
                }           
                params[pair[0]] = pair[1];
            }

            if(params.gid) {
                params.gid = parseInt(params.gid, 10);
            }

            if(!params.hasOwnProperty('pid')) {
                return params;
            }
            params.pid = parseInt(params.pid, 10);
            return params;
        };
        
        var openGallery = function(gid,pid){
            var pswpElement = document.querySelectorAll('.pswp')[0],
                items = galleries[gid-1].items,
                options = {
                    index: pid,
                    galleryUID: gid,
                    getThumbBoundsFn: function(index) {
                        var thumbnail = items[index].el.children[0],
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect(); 

                        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                    }
                };
            $.extend(options,_options);
            var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        }
        
        // initialize
        init(this);
        
        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = parseHash();
        if(hashData.pid > 0 && hashData.gid > 0) {
            openGallery(hashData.gid,hashData.pid);
        }
        
        return this;
    };
}( jQuery ));