# To-Do List App

Una aplicación web sencilla para gestionar tareas, construida con **Vite,** **React**, **TypeScript**, y **TailwindCSS**. Permite agregar, marcar como completadas, eliminar y editar tareas. Además, guarda el estado de las tareas en el almacenamiento local del navegador para persistir entre sesiones y tienen modo oscuro.

## Características

- **Agregar tareas**: Permite al usuario agregar nuevas tareas a la lista.
- **Marcar como completadas**: Puedes marcar las tareas como completadas, lo que las muestra con un estilo tachado.
- **Eliminar tareas**: Permite eliminar tareas de la lista.
- **Editar tareas**: Las tareas pueden ser editadas, cambiando su texto.
- **Persistencia en el almacenamiento local**: Las tareas se guardan en el `localStorage` para que persistan incluso después de actualizar la página o cerrar el navegador.
- **Animaciones**: Las tareas tienen animaciones de entrada y salida al ser agregadas o eliminadas.
- **Modo oscuro/claro:** Personalizable según la preferencia del usuario.

## Tecnologías Utilizadas

- **Vite**: Herramienta para el empaquetado rápido y el servidor de desarrollo.
- **React**: Biblioteca JavaScript para construir la interfaz de usuario.
- **TypeScript**: Para tipar el código y mejorar la experiencia de desarrollo.
- **TailwindCSS**: Utilizado para estilizar la aplicación de forma moderna y responsive.
- **Lucide-React**: Biblioteca de íconos SVG para React, usada para los botones de la aplicación.
- **localStorage**: Para almacenar las tareas de manera persistente entre sesiones.

## **Estructura del Proyecto**

La aplicación está estructurada de manera modular para garantizar claridad y escalabilidad:

* **`/src`**
  * **`/components`** : Contiene componentes reutilizables como `Form`, `ToDoList`, `Items` y `ThemeDarkLight`.
  * **`/types`** : Define las interfaces TypeScript para el tipado de datos (`typeTodo`, `typeToDoItem`).
  * **`App.tsx`** : Componente principal que maneja el estado global de la aplicación.
  * **`main.tsx`** : Punto de entrada principal para el renderizado de la aplicación.
* **`/public`** : Archivos públicos, como el `index.html`.
* **`README.md`** : Documentación detallada para la instalación, ejecución y uso de la aplicación.

## Decisiones Técnicas

* **Componentización Modular:**
  * Cada funcionalidad clave se divide en componentes individuales (`Form, TodoList, Items, ThemeDarkLight`).
  * Esto facilita el mantenimiento y la escalabilidad del código.
* **Estado Global con `useState`:**
  * Se maneja el estado de las tareas a nivel del componente principal `App`.
  * Las acciones (agregar, editar, eliminar, completar) son pasadas como props a componentes secundarios.
* **Persistencia con `localStorage`:**
  * Se asegura que los datos persistan entre sesiones.
  * Se manejan errores potenciales con bloques `try-catch`.
* **Transiciones y UX:**
  * Se han añadido animaciones suaves a las acciones más importantes (eliminar y agregar tareas).
  * Los botones son interactivos y tienen estados `hover` con animaciones suaves.

## **Diseño UI**

* Uso de **TailwindCSS** para crear un diseño moderno y responsivo.
* Botones con animaciones y retroalimentación visual al interactuar.
* Tema claro/oscuro con almacenamiento en `localStorage` para recordar la preferencia del usuario.

## Instalación

```bash

1. Clona el repositorio
git clone https://github.com/BrayanMen/ToDoListChallenge.git

### 2. Navega al directorio del proyecto

```bash
cd ToDoAppChallenge


## 3. Instala las dependencias

```bash
npm install


## 4. Inicia el servidor de desarrollo

```bash
npm run dev

La aplicación estará disponible en http://localhost:3000.
```

## Despliegue

[Link de Despliegue](https://to-do-list-challenge-plum.vercel.app/)
