document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        $('#spinner').fadeOut('slow', function () {
            $(this).remove();
        });
    }, 500);
});


new WOW().init();
$(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        $('.nav-bar').addClass('sticky-top');
    } else {
        $('.nav-bar').removeClass('sticky-top');
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});


document.querySelector('.btn-search').addEventListener('click', function() {
    var selectedValue = document.querySelector('.form-select').value;
    var targetElement;

    if (selectedValue === '1') {
        targetElement = document.getElementById('github-section');
    } else if (selectedValue === '2') {
        targetElement = document.getElementById('osc-article-section');
    } else if (selectedValue === '3') {
        targetElement = document.getElementById('lainnya-section');
    }

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        alert('Please select a valid category.');
    }
});


let spans = document.querySelectorAll(".kategori-1 span");
spans.forEach(span => {
    span.classList.add('text-dark');
});

let anya = document.querySelectorAll(".col-lg-3 a");
anya.forEach(a => {
    a.setAttribute("target", "_blank");
});




