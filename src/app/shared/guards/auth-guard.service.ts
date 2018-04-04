import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  canActivate() {
    console.log('Check for logged in user');
    return true;
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }
}
