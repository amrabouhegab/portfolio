/// <reference path="../typings/globals/jquery/index.d.ts" />
/*global $ */
$(function () {
    //Declaring Variables
    var scroll = $(this).data('scroll'),
    progress = $('.skill .progress .progress-bar');
    'use strict';
    //Adjust Smooth Scroll for Navbar Links ( Main Menu)
    $('.navbar .nav-item a').click(function (e) {
        e.preventDefault();
        console.log
        $('body , html').animate({
            scrollTop : $('#'+ scroll).offset().top
        }, 1000);
    });
    //Create Animated Progress Bar 
    $(document).ready(function() {
        $(window).scroll( function () {
            if ($(window).scrollTop() >= $('.skills').offset().top - 500 ){
                if (progress.innerWidth() == 0) {
                    progress.animate({
                        width : '100%'
                    },400)
                }
            } else {
                progress.innerWidth(0);
            }
        });
        
    })
});