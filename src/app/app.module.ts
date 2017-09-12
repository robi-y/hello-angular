import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviesService } from './services/movies.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/app.movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// same to annotates in java. name in angular is decorate
// defined AppModule to Nodule


const appRoutes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'movies', component: MoviesListComponent},
  { path: 'movies/:id', component: MovieDetailsComponent},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations:
  [AppComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MovieEditorComponent,
    HomePageComponent,
    PageNotFoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
