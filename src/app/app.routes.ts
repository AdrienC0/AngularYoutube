import { Routes } from '@angular/router';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { VideoPageComponent } from './components/video-page/video-page.component';

export const routes: Routes = [
    { path: 'login', component: AuthPageComponent },
    { path: 'search', component: SearchPageComponent },
    { path: 'video', component: VideoPageComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];
