# Ejercicio 5

Integración con keycloack

Cómo primer paso instalamos el plugin encargado de abrir la autenticación en una ventana nueva. Para el caso de apliación nativa
```bash
npm install cordova-plugin-browsertab
npm install @ionic-native/browser-tab
ionic cap sync
```

Las librerías a instalar dependen del proveedor de oauth a utilizar
En el caso de usar keycloak cómo servidor de autenticación, se pude usar la siguiente libería
```bash
npm i --save keycloak-angular
```
Funciona cómo un wrapper que hace la integración con angular de la librería oficial js de keycloak


También es necesario instalar la librería oficial de keycloak
```bash
npm i --save keycloak-js@10.0.0
```


