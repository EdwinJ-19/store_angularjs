import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // {path: '', redirectTo: '/home' , pathMatch: 'full'},
    {path: 'log-in', component: LoginPageComponent}
];
