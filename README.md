# PasteBsz

Es una herramienta donde puedes guardar texto online. Puedes enviar y compartirlo con tus amigos. También podrás descargar el texto o copiarlo directamente. Está en desarrollo.

### Que api se utilizo ?
se utilizo https://jsonbin.io/
<br></br>
ya que es una apgina web echo en javascript donde pedimos una peticion de guardado cada vez que guarda genera una id unica donde podemso ver lo que se guardo y nunca se repetira la id para no tener problemas de conpartir informacion solo podras copiar tus enlaces y compartilos con tus amigos
<br></br>
aparte lo que me ofrece el jsonbin es un panel donde puedo ver lo que comentan o guardan los de bloque de texto asi tener una aplica de aplicaciones al administracion para la seguridad del usuario y normativas de la redes 
![image](https://github.com/AvastrOficial/PasteBSZ/assets/91764815/9b905c87-ed02-44f3-bd6e-c2f8fcf28896)

<br></br>
### Características :
Detecta la carga completa del DOM: Usa DOMContentLoaded para asegurarse de que el DOM esté completamente cargado antes de ejecutar el código.
<br></br>
Recupera el ID del bin de la URL: Usa URLSearchParams para obtener el id de la URL.
<br></br>
Si hay un ID: Envía una solicitud GET a la API de jsonbin.io para recuperar el contenido del bin.
<br></br>
Headers: Incluye la clave de la API y la clave de acceso.
<br></br>
Maneja la respuesta: Si la respuesta es correcta, procesa el JSON.
<br></br>
Actualiza el DOM: Llena los campos de texto con los datos recuperados y oculta el botón de guardar.
<br></br>
Maneja errores: Si hay un error, muestra un mensaje de error.
### Uso de la pagina web : 
Este código permite guardar y compartir archivos de texto mediante la API de jsonbin.io y facilita la interacción del usuario mediante una interfaz web simple.
## Deseas usar nuestra herramienta ?
link version 0.0.1 : https://toolapikey.foroactivo.com/h10-pastebsz	

![image](https://github.com/AvastrOficial/PasteBSZ/assets/91764815/e039d97f-f113-444f-af4e-e7fb5886e762)
