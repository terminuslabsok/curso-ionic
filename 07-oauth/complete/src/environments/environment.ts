// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Add here your keycloak setup infos
import { KeycloakConfig } from 'keycloak-angular';
/*{
  "realm": "master",
  "auth-server-url": "http://localhost:8086/auth/",
  "ssl-required": "none",
  "resource": "curso-ionic",
  "credentials": {
    "secret": "41849a0b-de91-46c1-9226-7f7ac8a4e16d"
  },
  "confidential-port": 0
}*/

const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8086/auth',
  realm: 'master',
  clientId: 'curso-ionic',
  credentials: {
    secret : '41849a0b-de91-46c1-9226-7f7ac8a4e16d'
  }
};

export const environment = {
  keycloakConfig,
  production: false,
  baseUrl: 'http://localhost:8081'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
