$(document).ready(function () {
    const form = $('nav').find('form');
    form.find('.btn-default').addClass('btn-primary btn-sm mb-auto').removeClass('btn-default');
    form.find('.form-control').addClass('shadow border-0');
    const comments = $("#comments");
    comments.find('h3').remove();
    comments.addClass('mt-0')

});
