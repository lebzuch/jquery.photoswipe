/*! PhotoSwipe jQuery - v0.1 - 2015-01-23
* Copyright (c) 2015 webzooh; */
(function( $ ) {
    $.fn.photoswipe = function(options){
        var _options = options,
            markup = '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--share" title="Share"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>';
        if($('.pswp').size() === 0) { $(markup).appendTo('body'); }
        var init = function($this){
            pswpGalleries.push({ items: [] });
            var gid = pswpGalleries.length,
                gallery = pswpGalleries[gid - 1];
            $this.each(function(i, anchor){
                var $anchor = $(anchor),
                    src = anchor.href,
                    msrc = $anchor.find('img').attr('src'),
                    size = $anchor.data('size'),
                    title = $anchor.data('title'),
                    pid = i + 1;
                if(typeof size != "undefined" && size.indexOf('x') >= 0){
                    size = size.split('x');
                    if(size.length != 2){
                        throw SyntaxError('Attribute data-size is missing or is an incorrect format. E.g. data-size="[width]x[height]"');
                    }
                } else {
                    throw SyntaxError('Attribute data-size is missing or is an incorrect format. E.g. data-size="[width]x[height]"');
                }
                var item = {
                    src: src,
                    msrc: msrc,
                    w: parseInt(size[0],10),
                    h: parseInt(size[1],10),
                    title: title,
                    el: anchor
                };
                gallery.items.push(item);

                $anchor.on('click',function(e){
                    e.preventDefault();
                    openGallery(gid,pid);
                });
            });
        };
        
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
            if (pswpGalleries.length >= gid) {
                var pswpElement = document.querySelectorAll('.pswp')[0],
                    items = pswpGalleries[gid-1].items,
                    options = {
                        index: pid - 1,
                        galleryUID: gid,
                        getThumbBoundsFn: function(index) {
                            var thumbnail = items[index].el.children[0],
                                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                                rect = thumbnail.getBoundingClientRect();

                            return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                        }
                    };
                $.extend(options,_options);
                var pswpInstance = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
                pswpInstance.init();
                if($.isFunction(options.onInit)) {
                    options.onInit(pswpInstance);
                }
            }
        };
        
        // initialize
        init(this);
        
        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = parseHash();
        if(hashData.pid > 0 && hashData.gid > 0) {
            openGallery(hashData.gid,hashData.pid);
        }
        
        return this;
    };
}( jQuery, window.pswpGalleries = window.pswpGalleries || [] ));