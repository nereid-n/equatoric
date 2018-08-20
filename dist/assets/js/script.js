'use strict';

$(document).ready(function () {
  if ($('.dots-js').length > 0) {
    $('.dots-js').dotdotdot();
  }
  if ($('.item-more').length > 0) {
    var windowSize = $(document).width();
    if (windowSize > 992) {
      itemActiveFirst(3);
      $('.more-js').click(function () {
        var items = $(this).parents('.articles-preview__wrap').find('.item-more');
        itemActiveClick(items, 3);
      });
    } else if (windowSize > 600) {
      itemActiveFirst(4);
      $('.more-js').click(function () {
        var items = $(this).parents('.articles-preview__wrap').find('.item-more');
        itemActiveClick(items, 4);
      });
    } else {
      itemActiveFirst(2);
      $('.more-js').click(function () {
        var items = $(this).parents('.articles-preview__wrap').find('.item-more');
        itemActiveClick(items, 2);
      });
    }
  }

  function itemActiveFirst(n) {
    var wraps = $('.articles-preview__wrap');
    for (var i = 0; i < wraps.length; i++) {
      var wrap = $(wraps[i]);
      var items = wrap.find('.item-more');
      for (var j = 0; j < n; j++) {
        $(items[j]).addClass('item-more-active');
      }
      $('.dots-js').dotdotdot();
    }
  }
  function itemActiveClick(items, n) {
    var itemsPool = [];
    for (var i = 0; i < items.length; i++) {
      var itemMore = $(items[i]);
      if (!itemMore.hasClass('item-more-active')) {
        itemsPool.push(itemMore);
      }
    }
    for (var i = 0; i < n; i++) {
      $(itemsPool[i]).addClass('item-more-active');
    }
    $('.dots-js').dotdotdot();
  }
});
//# sourceMappingURL=script.js.map
