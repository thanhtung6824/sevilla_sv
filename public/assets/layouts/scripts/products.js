const Products = (function () {
    const handleMenuClick = function () {
        const arrow = $('.triangle-right');
        const subMenu = $('.sub-menu');
        const navLink = $('.nav-link');
        const listItem = $('.list-item');
        navLink.on('click', function () {
            console.log($(this).closest(listItem).find(subMenu).css('display'))
            if($(this).closest(listItem).find(subMenu).css('display') === 'none') {
                $(this).closest(listItem).find(arrow).css('transform', 'rotate(90deg)');
                $(this).closest(listItem).find(subMenu).css('display', 'block')
            } else {
                $(this).closest(listItem).find(arrow).css('transform', 'unset');
                $(this).closest(listItem).find(subMenu).css('display', 'none')
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
