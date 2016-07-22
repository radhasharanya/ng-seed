/**
 * Created by pc on 7/20/2016.
 */
var app=angular.module("movieflix")
                app.controller("Mymovieflix",function(movieservice)
{
  var vm=this;

  vm.movie=movieservice.getmovies();
  vm.sortcolumn=movieservice.getrating();
  vm.movieToBeAdded = {};
  vm.movieToBeEdit = {};

  vm.deletemovie=function(i)
  {
    vm.movie.splice(i,1);
  };
  vm.submitAddMovieForm = function(){
    vm.movie.push(vm.movieToBeAdded);
    vm.showAddMovieForm = false;
    vm.movieToBeAdded = {};
  };
  vm.addmovie = function(){
    vm.showAddMovieForm = true;
  };


  vm.editmovie = function(mv){
    vm.showEditMovieForm = true;
    vm.movieToBeEdit=mv;
  };

  vm.saveMovieForm = function(){
    vm.showEditMovieForm = false;
    vm.movieToBeEdit = {};


  };
});
