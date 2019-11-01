import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';;
import { routing } from './app.routing';
import { AuthGuard } from './login/auth-guard.service';
import { LoginService } from './login/login.service';
import { PreventUnsavedChangesGuard } from './login/prevent-unsaved-changes-guard.service';
import { GitHubModule } from './github/github.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    GitHubModule,
    LoginModule,
    routing
  ],
  providers: [AuthGuard,LoginService, PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
