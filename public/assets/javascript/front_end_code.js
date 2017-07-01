//gets today's date and puts in format needed for API
var m = moment().get('date');
var date = moment().format('YYYY-MM-DD');
var zipCode = $('#name-input').val();
var rndMovies = [];

$('#btnGoZipCode').on('click', function(event) {
  event.preventDefault();
  $(location).attr('href', 'choices.html');
});

$('#settingsSpan').click(function() {
  event.preventDefault();

});
function buildChoices() {
  var movieList = getRecommendations();
  console.log(movieList);
  var choiceDiv = $('#choiceContiner');

  for (var i = 1; i <= 3; i++) {
    var movieName = movieList[i - 1].movie.movieName;
    var movieDesc = movieList[i - 1].movie.movieDesc;
    var movieGenre = movieList[i - 1].movie.movieGenre;
    var theatreName = movieList[i - 1].movie.theatreName;
    var theatreAddress = movieList[i - 1].movie.location.address;
    var theatreCity = movieList[i - 1].movie.location.city;
    var theatreState = movieList[i - 1].movie.location.state;
    var theatreZip = movieList[i - 1].movie.location.zip;

    var restaurantName = movieList[i - 1].restaurant.restaurantName;
    var restaurantCategory = movieList[i - 1].restaurant.category;
    var restaurantAddress = movieList[i - 1].restaurant.location.address;
    var restaurantCity = movieList[i - 1].restaurant.location.city;
    var restaurantState = movieList[i - 1].restaurant.location.state;
    var restaurantZip = movieList[i - 1].restaurant.location.zip;
    var restaurantPrice = movieList[i - 1].restaurant.price;

    var strChoices = '<div class="row">';
    strChoices += '    <div class="col-lg-12 well well-lg text-success">';
    strChoices += '        <h1>Combo ' + i + '</h1>';
    strChoices += '        <div class="row">';
    strChoices += '            <div class="col-sm-6" data-toggle="modal" data-target="#restaurantModal' +
        i + '">';
    strChoices += '                <div class="row">';
    strChoices += '                    <div class="col-sm-6">';
    strChoices += '                        <img alt="dinner choice ' + i +
        '" src="http://via.placeholder.com/200x300">';
    strChoices += '                    </div>';
    strChoices += '                    <div class="col-sm-6 text-center">';
    strChoices += '                        <h3>' + restaurantName + '</h3>';
    strChoices += '                        <p>Lorem ipsum dolor sit amet</p>';
    strChoices += '                    </div>';
    strChoices += '                </div>';
    strChoices += '            </div>';
    strChoices += '            <div class="col-sm-6" data-toggle="modal" data-target="#movieModal' +
        i + '">';
    strChoices += '                <div class="row"></div>';
    strChoices += '                    <div class="col-sm-6">';
    strChoices += '                        <img alt="movie choice ' + i +
        '" src="http://via.placeholder.com/200x300">';
    strChoices += '                    </div>';
    strChoices += '                    <div class="col-sm-6 text-center">';
    strChoices += '                        <h3>' + movieName + '</h3>';
    strChoices += '                        <p>Lorem ipsum dolor sit amet</p>';
    strChoices += '                    </div>';
    strChoices += '                </div>';
    strChoices += '            </div>';
    strChoices += '        </div>';
    strChoices += '        <div class="row"><div class="col-sm-12 text-center">';
    strChoices += '            <button type="button" class="btn btn-lg btn-success">';
    strChoices += '            Choose Combo ' + i + '</button>';
    strChoices += '        </div>';
    strChoices += '    </div>';
    strChoices += '</div>';

    choiceDiv.append(strChoices);
  }
}
