# Puntored challenge

## Challenge
Para ampliar nuestro portafolio, buscamos desarrollar un portal transaccional integral
que ofrezca recargas a operadores móviles, pagos de servicios, compra de pines de
contenido y transferencias bancarias. Tu desafío inicial será crear el primer módulo de
recargas móviles, consumiendo los servicios API de Puntored. Para lograr esto, se
requiere la construcción de una API en Spring Boot y un proyecto web en React, que
consuman los servicios de Puntored descritos en este documento.

### Instalación y ejecución proyecto Spring boot.

#### Requisitos

Node.js (versión recomendada: ≥ 18)

npm o yarn


### Ejecución

Clonar el repository 
```
  git clone https://github.com/puntored-challenge/transactional_portal.git
  cd transactional_portal_api
```

Renombrar el archivo .env.example a .env y modificar las variables
```
VITE_API_URL=http://localhost:18081/api/v1

```

Ejecución
```
npm run dev
```


### Solucion del challenge

El objetivo de esta solución es mantener una arquitectura limpia, segura y fácil de mantener. Organicé el proyecto dividiendo claramente los componentes, layouts, hooks, servicios y utilidades para que el código sea más comprensible y escalable. Para asegurar la calidad, configuré ESLint con reglas específicas para React y TypeScript, y usé typescript-eslint para mantener la coherencia en el tipado. También desarrollé hooks personalizados que me permiten reutilizar lógica de forma ordenada. En cuanto a seguridad, validé los formularios desde el frontend y protegí las rutas privadas controlando el acceso mediante el estado global del usuario autenticado. Además, programé siguiendo el enfoque mobile first y me aseguré de que la aplicación sea completamente responsive, adaptándose correctamente a distintos tamaños de pantalla

- **Framework principal**: React 19 con Vite para desarrollo rápido y compilación eficiente.
- **Lenguaje**: TypeScript para tipado estático y mayor seguridad en tiempo de desarrollo.
- **Gestión de estado**: Redux Toolkit para manejar el estado global de forma predecible y escalable.
- **Enrutamiento**: React Router DOM para navegación SPA entre vistas protegidas y públicas.
- **Estilos**: MUI + Emotion para componentes visuales modernos y estilos dinámicos.
- **Formularios**: React Hook Form para validación eficiente y control de errores.
- **Internacionalización**: i18next + react-i18next para soporte multilenguaje.
- **Consumo de APIs**: Axios para comunicación con el backend.


#### Integracion

##### Rutas creadas

###### Registro

Esta vista te permite registrar nuevos usuarios en el portal y representa el punto de partida obligatorio para acceder a las funcionalidades transaccionales de la aplicación

<img width="948" height="849" alt="image" src="https://github.com/user-attachments/assets/4d44b9c6-6356-4bce-9e76-cfba9973a577" />


###### Login 

Esta vista permite a los usuarios iniciar sesión en el portal transaccional, autenticándose con sus credenciales para acceder a las funcionalidades protegidas de la aplicación. Una vez autenticados, se les asigna un token JWT que valida su identidad y les permite interactuar con las rutas privadas del sistema de forma segura.

<img width="956" height="917" alt="image" src="https://github.com/user-attachments/assets/1767ade0-d529-4c7d-8b6b-12f9990117dc" />

###### Consultas

Esta vista me permite visualizar todas las transacciones que he creado como usuario autenticado.

<img width="961" height="878" alt="image" src="https://github.com/user-attachments/assets/afbc6ae0-85ce-4a50-9826-ba1c6dd3a7b2" />

###### Recargas

Este módulo permite a los usuarios realizar recargas de saldo a teléfonos móviles de forma rápida y segura. Desde esta vista, pueden seleccionar el operador, ingresar el número de celular y el monto a recargar, todo dentro de un flujo intuitivo que valida los datos antes de enviar la transacción.

<img width="949" height="760" alt="image" src="https://github.com/user-attachments/assets/27e1d830-07ba-4f84-8822-9e949cf06062" />

### Despliegue

Este despliegue también está disponible en Vercel, ya que la instancia del backend en AWS EC2 presenta restricciones con certificados HTTPS. Por esa razón, se optó por una herramienta alterna que permite una integración más fluida y segura entre el frontend y el backend.

Te invito a visitar el sitio web y explorar todas las funcionalidades que ofrece el portal transaccional, desde la creación de usuarios y el inicio de sesión, hasta la visualización de transacciones y la realización de recargas móviles. ¡Descubre cómo esta solución facilita tus operaciones de forma rápida y confiable!

```
http://transactional-portal.surge.sh/dashboard
```

Este host tiene limitaciones por lo cual si en alguno momento se veo una pagina not found de el servicio por favor esperar alguno minutos e ir recargando hasta que el servicio este disponible


