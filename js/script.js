/**
 * File script.js.
 *
 * Major script.
 */

( function( $ ) {
    $('.widget-area input[type="search"]').attr('placeholder', 'Search...');

    // Global search
    var toggleButton = $( '.header-search-toggle' );

    if ( toggleButton.length ) {

        toggleButton.on("click", function(){
            $( '.header-search-form' ).slideToggle();
        });
    }

    $('.header-mobile-menu .mobile-menu-toggle').on('click', function () {
        $('.header-mobile-menu').toggleClass('fixed');
        $('.main-navigation').toggleClass('show');
    });
} )( jQuery );