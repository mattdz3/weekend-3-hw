'use strict';

$.getJSON('https://api.github.com/users/mattdz3/repos').done(function(data){
  setData(data);
});

function setData (repos) {
  var userTemp =_.template($('.userData').text());
  repos.forEach(function(repo) {
    var rendered = userTemp(repo);
    $('.repo-container').append(rendered);
  });
}

$.getJSON('https://api.github.com/users/mattdz3').done(function(data){
  setSide(data);
});

function setSide (data) {
  var userTemp = _.template($('.userSide').text() );
    var rendered = userTemp(data);
      $('.side').prepend(rendered);
};



/*
var getName = _.template($('.get-name').text());
 
repos.forEach(function(name) {

  var allRepos = getName(name);
 
  $('.repo-container').prepend(allRepos);
});


var getDes = _.template($('.get-des').text());
 
repos.forEach(function(description) {

  var allRepos = getDes(description);
 
  $('.get-name').append(allRepos);
});


var getLang = _.template($('.lang').text());
 
repos.forEach(function(language) {

  var allRepos = getLang(language);
 
  $('.repo-right').append(allRepos);
});


var getStar = _.template($('.star').text());
 
repos.forEach(function(stargazers_count) {

  var allRepos = getStar(stargazers_count);
 
  $('get-name1').append(allRepos);
});



var getFork = _.template($('.fork').text());
 
repos.forEach(function(forks_count) {

  var allRepos = getFork(forks_count);
 
  $('.repo-right').append(allRepos);
});

*/

/*
var getFollowers = _.template($('.get-followers').text());
 
repos.forEach(function(followers_url) {

  var allRepos = getFollowers(followers_url);
 
  $('.main').prepend(allRepos);
});
*/





