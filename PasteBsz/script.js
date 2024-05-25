 document.getElementById('save-button').addEventListener('click', saveText);
        document.getElementById('copy-button').addEventListener('click', copyLink);

        function saveText() {
            const postName = document.getElementById('post_name').value;
            const text = document.getElementById('code').value;
            
            if (!text) {
                alert('Por favor, ingresa texto.');
                return;
            }

            fetch('https://api.jsonbin.io/v3/b', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': '$2a$10$/CXelVC4xLjkRon.u3NeweWC.iS69xsG84Q2RAuG0eTJOPbBlZAvu', // Reemplaza con tu propia API key
                    'X-Access-Key': '$2a$10$Dn.CeRxSbAWDwBbSK7WYfOAig6Ue9PVSLm35Lcdu5TA4h1kyZIFHi' // Reemplaza con tu propia Access Key
                },
                body: JSON.stringify({ postName, text })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('La respuesta de red no fue correcta: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Respuesta de la API:', data);
                const binId = data.metadata.id;
                const shareLink = `${window.location.href}?id=${binId}`;
                document.getElementById('generated-link').value = shareLink;
                document.getElementById('link-container').style.display = 'block';
                document.getElementById('save-button').style.display = 'none'; // Oculta el botón de guardar
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al guardar el texto: ' + error.message);
            });
        }

        function copyLink() {
            const copyText = document.getElementById('generated-link');
            copyText.select();
            copyText.setSelectionRange(0, 99999); // Para dispositivos móviles
            document.execCommand('copy');
            alert('Enlace copiado: ' + copyText.value);
        }

        document.addEventListener('DOMContentLoaded', () => {
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');
            if (id) {
                fetch(`https://api.jsonbin.io/v3/b/${id}/latest`, {
                    method: 'GET',
                    headers: {
                        'X-Master-Key': '$2a$10$/CXelVC4xLjkRon.u3NeweWC.iS69xsG84Q2RAuG0eTJOPbBlZAvu', // Reemplaza con tu propia API key
                        'X-Access-Key': '$2a$10$Dn.CeRxSbAWDwBbSK7WYfOAig6Ue9PVSLm35Lcdu5TA4h1kyZIFHi' // Reemplaza con tu propia Access Key
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('La respuesta de red no fue correcta: ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Datos recuperados:', data);
                    document.getElementById('code').value = data.record.text;
                    document.getElementById('post_name').value = data.record.postName;
                    document.getElementById('save-button').style.display = 'none'; // Oculta el botón de guardar al abrir el enlace
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Hubo un error al recuperar el texto: ' + error.message);
                });
            }
        });
