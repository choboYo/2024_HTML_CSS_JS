
var count = 0;

function counts() {
    count++;
}

function bgc_chg() {
    let body = $('body');
    let topButton = $('.topButton');
    let topButton_arrow = $('.topButton > a');
    let article_border = $('body > article');
    let header = $('#header > a');
    let nav_a = $('nav  ul > li > a');
    let nav_li = $('nav  ul > li');
    let nav_ul = $('nav  ul');
    if(count % 2 != 0) {
        body.css('background-color', 'black');
        topButton.css('border-color', 'white');
        topButton_arrow.css('color', 'white');
        article_border.css('border-color', 'white');
        header.css('color', 'white');
        nav_a.css('color', 'white');
        nav_li.css('background-color', 'black');
        nav_ul.css('background-color', 'black');
    } else {
        body.css('background-color', 'white');
        topButton.css('border-color', 'black');
        topButton_arrow.css('color', 'black');
        article_border.css('border-color', 'black')
        header.css('color', 'black');
        nav_a.css('color', 'black');
        nav_li.css('background-color', 'white');
        nav_ul.css('background-color', 'white');
    }
}





    
