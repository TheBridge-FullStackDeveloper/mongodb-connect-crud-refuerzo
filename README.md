# 🍃 MongoDB Users Manager - Mongoose Refuerzo

### 🚀 Descripción del Proyecto

Esta aplicación se centra en la gestión de datos no relacionales (NoSQL) utilizando **MongoDB**. El proyecto enseña a definir estructuras de datos flexibles pero controladas mediante **Schemas** y **Modelos** de Mongoose. Se enfoca en la eficiencia del desarrollo y el uso de métodos avanzados de sincronización de datos.

### 🎯 Funcionalidades

✅ **1. Modelado de Datos (ODM)**

- Definición de esquemas estrictos con **Mongoose** para asegurar que los documentos sigan una estructura coherente.

✅ **2. Sincronización Inteligente (Upsert)**

- Sistema de importación avanzado que utiliza `{ upsert: true }`: si el usuario ya existe por su `externalId`, lo actualiza; si no, lo crea automáticamente.

✅ **3. Conexión Asíncrona Robusta**

- Uso de funciones `async/await` para gestionar la conexión a la base de datos y prevenir bloqueos del servidor.

✅ **4. Métodos "Mágicos" de Mongoose**

- Aprovechamiento de funciones integradas como `findByIdAndUpdate` y `findByIdAndDelete` que simplifican drásticamente el código CRUD.

✅ **5. Validación de Datos Integrada**

- Control de errores en tiempo de ejecución (`runValidators`) para asegurar que las actualizaciones respetan las reglas del esquema.

### 🛠️ Tecnologías Utilizadas

- **Node.js** & **Express**
- **Mongoose**
- **MongoDB Atlas / Local**
- **Axios**
