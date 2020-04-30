# Ejercicio 3

Llamada a servicios usando RX-JS


Los servicios fueron actualizados a llamadas REST realizar, la subscripcion en los respectivos componentes de la siguiente forma

```ts
subscribe(
  value => {
   ... 
  },
  err => console.error('error', err),
  () => console.log('complete')
);

```

