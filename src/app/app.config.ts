import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { AuthInterceptor } from './Service/auth.interceptor'; // Asegúrate de ajustar la ruta
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura
        }
    }),
    provideHttpClient(
      withInterceptors([
        AuthInterceptor
      ])
    ),
    MessageService,
  ],
};
