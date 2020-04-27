# Ejercicio 1

Crear la primera aplicación de Iionic

## 1- Instalación

Configura el ambiente siguiendo la siguiente [guía](https://ionicframework.com/docs/intro/environment) 

A continuación instala ionic

```bash
npm install -g @ionic/cli cordova
```

## 2- Crear aplicación con tabs template

```bash
ionic start tabsApp tabs
```
De momento solo vamos a usar la app de forma web, así que si pregunta integración con android o IOS decimos que no.

## 3- Iniciar aplicación

```bash
cd tabsApp
ionic serve
```
## 4- App con template de lista
Ahora crear una aplicación basada en el template de lista 

```bash
ionic start listApp list
```

## 5- Iniciar aplicación con ionic lab

```bash
ionic serve --lab
```
