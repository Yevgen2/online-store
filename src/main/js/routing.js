function initRouting() {
    switch (location.hash) {
        case '':
            $('#check-active').children().removeClass('active').filter(':first-child').addClass('active');
            $('.section').removeClass('active');
            $('.home-page').addClass('active');
            break;
        case '#categories':
            createCategories();
            break;
        case '#category':
            showCategories();
            break;
        case '#product-details':
            showProductDetail();
            break;
        case '#checkout':
            checkOutListener();
            break;
        case '#order-confirmation':
            productWasSuccessfullyPurchased();
            break;
        case '#search':
            showSearchingPage();
            break;
    }
}