# Ejercicio 4

Llamada a servicios usando RX-JS


Los servicios fueron actualizados a llamadas REST que retornan observables, realizar la subscripcion en los respectivos componentes de la siguiente forma

```ts
myObserbable.subscribe(
  value => {
   ... 
  },
  err => console.error('error', err),
  () => console.log('complete')
);

```

