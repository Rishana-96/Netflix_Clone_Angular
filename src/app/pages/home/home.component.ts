import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service:MovieApiServiceService){}
     bannerResult:any=[];
     trendingMovieResult:any=[];
     actionMovieResult:any=[];
     adventureMovieResult:any=[];
     animationMovieResult:any=[];
     comedyMovieResult:any=[];
     documentaryMovieResult:any=[];
     sciencefictionMovieResult:any=[];
     thrillerMovieResult:any=[];
     

  ngOnInit():void{
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
    this.documentaryMovie()

  }
  //bannerData
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult = result.results;
      
    })
  }

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingresult#');
      this.trendingMovieResult = result.results;

      //this.trendinMovieResult
    })
  }

  //action
  actionMovie(){
    this.service.fetchActionMovies().subscribe((result)=>{
    //  console.log(result,'actionmovies#');
      this.actionMovieResult = result.results
      
    })
  }

  //adventure
  adventureMovie(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
      //console.log(result,'actionmovies#');
      this.adventureMovieResult = result.results
      
    })
  }

  animationMovie(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
     // console.log(result,'actionmovies#');
      this.animationMovieResult = result.results
      
    })
  }

  comedyMovie(){
    this.service.fetchComedyMovies().subscribe((result)=>{
      //console.log(result,'actionmovies#');
      this.comedyMovieResult = result.results
      
    })
  }

  documentaryMovie(){
    this.service.fetchDocumentaryMovies().subscribe((result)=>{
     // console.log(result,'actionmovies#');
      this.documentaryMovieResult = result.results
      
    })
  }

  sciencefictionMovie(){
    this.service.fetchScienceFictionMovies().subscribe((result)=>{
     // console.log(result,'actionmovies#');
      this.sciencefictionMovieResult = result.results
      
    })
  }

  thrillerMovie(){
    this.service.fetchThrillerMovies().subscribe((result)=>{
      console.log(result,'actionmovies#');
      this.thrillerMovieResult = result.results
      
    })
  }


}
