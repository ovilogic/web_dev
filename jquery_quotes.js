import getText(file) from 'web_worker'
console.log('the import is here', getText(file))

$('document').ready(function() {
    $('a').attr('href', 'http://www.twitter.com')

});