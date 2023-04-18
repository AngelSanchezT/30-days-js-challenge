# 30-days-js-challenge
¡Bienvenido al Reto de 30 días de JavaScript! Eleva tus habilidades de codificación y libera tu creatividad con estos desafíos diarios de programación. Desde construir aplicaciones simples hasta resolver algoritmos complejos. Este repositorio contiene los desafíos y soluciones para cada día del reto, así como las instrucciones para descargar y ejecutar el proyecto en tu propio entorno.


[📥 Descarga del proyecto](#📥-descarga-del-proyecto)
[📚 Librerías utilizadas](#📚-librerías-utilizadas)
[⚙️ Configuración](#⚙️-configuración)
[▶️ Ejecución de los desafíos](#▶️-ejecución-de-los-desafíos)


## 📥 Descarga del proyecto

Para descargar el proyecto, puedes clonar este repositorio en tu máquina local utilizando el siguiente comando de git:

```bash
git clone https://github.com/AngelSanchezT/30-days-js-challenge.git
```

## 📚 Librerías utilizadas
Este proyecto de Reto de 30 días de JavaScript utiliza las siguientes librerías de testing:

- **Mocha**: Una popular librería de testing en JavaScript que proporciona una sintaxis clara y concisa para escribir pruebas unitarias y de integración. Mocha permite ejecutar pruebas en Node.js y en el navegador, y ofrece una amplia gama de funciones para aserciones, manejo de errores y reportes de resultados.

- **Chai**: Una librería de aserciones que se integra bien con Mocha y proporciona una sintaxis expresiva y legible para verificar resultados de pruebas. Chai admite varios estilos de aserciones, incluyendo expect, should y assert, y ofrece una gran cantidad de opciones para personalizar las comparaciones.

Estas librerías son utilizadas en este proyecto para realizar pruebas automatizadas en los desafíos diarios de JavaScript. Las pruebas son importantes para asegurarse de que las soluciones sean correctas y funcionen según lo esperado, y para mantener la calidad del código a lo largo del reto.

## ⚙️ Configuración
Antes de comenzar con los retos, asegúrate de tener instalado Node.js y npm (Node Package Manager) en tu máquina. Puedes descargar Node.js desde https://nodejs.org/ y npm se instalará automáticamente junto con Node.js.

Una vez que hayas instalado Node.js y npm, navega a la carpeta del proyecto en tu terminal y ejecuta el siguiente comando para instalar las dependencias necesarias:

```
npm install
```

## ▶️ Ejecución de los desafíos

Cada día del reto está organizado en una carpeta separada con un nombre descriptivo, por ejemplo dia-01 para el primer día. Cada carpeta contiene un archivo challenge.js con el desafío del día y un archivo solution.js con una posible solución.

Para ejecutar las pruebas de un desafío específico, puedes usar el siguiente comando en tu terminal:


```bash
npm test .\day-01
```

Esto ejecutará las pruebas para el desafío del primer día utilizando Mocha y Chai. Puedes reemplazar day-01 con el nombre de la carpeta del desafío que deseas probar.

¡Buena suerte y feliz codificación!

# TODO
- [ ] Pending to describe how the tests can be executed.
- [ ] Create index the proyect with describe short.
- [ ] Create indec in the readme the each day.
- [ ] Validate los message the commit, remove the red circle.


/* "test": "mocha --experimental-specifier-resolution=node --require esm --recursive 'day-*/test/*.js'" */
