import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const isAuthenticated = !!localStorage.getItem('userToken'); 
  console.log('AuthGuard:', { isAuthenticated, route: route.url, state: state.url });

  if (!isAuthenticated) {
    router.navigate(['/login']); 
    return false;
  }
  return true;

};
