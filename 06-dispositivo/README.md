# Ejercicio 6

Interectuaremos con las partes del dispositivo.
Se agregarán las siguientes funcionalidades:
- almacenamiento de preguntas para acceder sin conexión
- opción de compartir
- notificaciones push

## Almacenamiento
Capacitor ya tiene una api de storage https://capacitor.ionicframework.com/docs/apis/storage, pero usa sharedPreferences, no recoemndable para el almacenamiento de muchos datos.
Se agrega logica a preguntas.service.ts


## Se añade menú de compartir en la visualización de la preguntas
Para compartir se añade el plugin https://capacitor.ionicframework.com/docs/apis/share
Tener cuidado que el plugin no está disponible para todos los dispositivos.
Se añade lógica en la paágina de visualización de preguntas.

## Notificaciones push




