/**
 * Created by pc on 7/20/2016.
 */

var app= angular.module("movieflix",[])
        .controller("Mymovieflix",function ($scope)
{
  var movies=[
    {title:"x men apocalypse" , rating:"0"},
    {title:"Touch The Wall", rating:"0"},
    {title:"me before you", rating:"0"},
    {title:"barbershop the next cut",rating:"0"},
    {title:"angry birds",rating:"0"},
    {title:"londonhasfallen",rating:"0"},
    {title:"home",rating:"0"}
  ];
  $scope.movie=movies;
});
