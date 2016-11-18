var elixir = require('laravel-elixir');

elixir(function(mix) {
	mix.sass('./src/flex-grid.scss', './dist/flex-grid.css');
});