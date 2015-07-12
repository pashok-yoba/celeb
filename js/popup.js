;(function(window, document, $) {
    $.fn.center = function () {
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                    $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                    $(window).scrollLeft()) + "px");
        return this;
    };

    $.popup = function () {
        var $layer = $('.popupLayer');
        var $popups = $('.popup');
        var $hrefs = $('a[data-popup]');

        $.showPopup = function (id) {
            $layer.show();
            $popups.hide();
            $('#' + id).show().center();
            return this;
        }

        $.hidePopup = function () {
            $('.popup').hide();
            return this;
        }

        $layer.hide();
        $popups.hide();

        $layer.on("click", function (e) {
            e.preventDefault();
            $layer.hide();
        });

        $popups.on("click", function (e) {
            e.stopPropagation();
        });

        $hrefs.on("click", function (e) {
            e.preventDefault();
            var popupId = $(this).data("popup");
            $.showPopup(popupId);
        });
        return this;
    };


}(this, document, jQuery));
