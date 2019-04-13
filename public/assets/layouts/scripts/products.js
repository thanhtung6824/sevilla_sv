const Products = (function () {
    const handleMenuClick = function () {
        const arrow = $('.triangle-right');
        const subMenu = $('.sub-menu');
        const liMenu = $('.categories-menu li');
        liMenu.on('click', function () {
            if(subMenu.css('display') === 'none') {
                console.log(2)
                $(this).find(arrow).css('transform', 'rotate(90deg)');
                $(this).find(subMenu).css('display', 'block')
            } else {
                $(this).find(arrow).css('transform', 'unset');
                $(this).find(subMenu).css('display', 'none')
            }
        });
    };

    return {
        init: function () {
            handleMenuClick();
        }
    }
}());

jQuery(document).ready(function () {
    Products.init();
});
