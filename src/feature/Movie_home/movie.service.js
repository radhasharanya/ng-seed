/**
 * Created by pc on 7/20/2016.
 */

angular.module("movieflix")
  .service("movieservice",movieservice )

function movieservice(){
  var movies=[
    {title:"x men apocalypse" , rating:"0", image:"../x-men-apocalypse.jpg" ,action :1,realstory:0,romantic:0,comedy:0,animation:0,id:"http://www.imdb.com/title/tt3385516"},
    {title:"Touch The Wall", rating:"2",image:"../images/touch_the_wall.jpg" ,action :0,realstory:1,romantic:0,comedy:0,animation:0,id:"http://www.imdb.com/title/tt2980728"},
    {title:"me before you", rating:"3",image:"../images/me-before-you%20.jpg", action :0,realstory:0,romantic:1,comedy:0,animation:0,id:"http://www.imdb.com/title/tt2674426/?ref_=nv_sr_1"},
    {title:"barbershop the next cut",rating:"4",image:"../images/barbershop-the-next-cut.jpg",action :0,realstory:0,romantic:0,comedy:1,animation:0,id:"http://www.imdb.com/title/tt3628584/?ref_=nv_sr_1"},
    {title:"angry birds",rating:"2",image:"../images/angry-birds.jpg",action :0,realstory:0,romantic:0,comedy:0,animation:1,id:"http://www.imdb.com/title/tt1985949/?ref_=nv_sr_1"},
    {title:"londonhasfallen",rating:"3",image:"../images/londonhasfallen.jpg",action :1,realstory:2,romantic:0,comedy:0,animation:0,id:"http://www.imdb.com/title/tt1985949/?ref_=nv_sr_1"},
    {title:"home",rating:"4",image:"../images/home.jpg",action :1,realstory:0,romantic:0,comedy:0,animation:2 ,id:"http://www.imdb.com/title/tt2224026/?ref_=nv_sr_4"},
    {title:"zootopia",rating:"4",image:"../images/zootopia.jpg" ,action :1,realstory:0,romantic:0,comedy:0,animation:3,id:"http://www.imdb.com/title/tt2948356"}
  ];
  this.getmovies=function()
  {
    return movies;
  }
  this.getrating=function(){
    return movies.rating;
  }
}
