var news = new XMLHttpRequest();
news.open('GET', 'https://kingstv.herokuapp.com/api/news')
news.onload = function() {
    console.log(news.responseText);
};
