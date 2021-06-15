# Crear repositorio
git init

# Credenciales
git config --global user.email "you@email.com"
git config --global user.name "You name"

# Agregar archivos al index
git add <filename>
git add .

# Consolidar o confirmar
git commit -m “comment”

# Agregar remoto
git remote add origin <server>

# Enviar
git push -u origin <branchName>

---------------------------------------------

# Agregar remoto
git remote add origin <server>

# Enviar
git push origin <branchName>

---------------------------------------------

# Local
git clone /path/to/repository

# Remoto
git clone <server>

---------------------------------------------

# Crear branch
git checkout -b <branchName>

# Cambiar branch
git checkout <branchName>

# Eliminar branch
git branch -d <branchName>

# Enviar branch
git push origin <branchName>

---------------------------------------------

# Actualizar
git pull

# Fusionar
git merge <branchName>

# Conflictos
git add <filename>

# Comparar branch's
git diff <source_brach> <target_branch>

---------------------------------------------

# Estado
git status

# Log
git log

# Descartar
git checkout – <filename>
git fetch origin
git reset –hard origin/master

# CD -> Navegar entre directorios "Carpetas" 
    Ejemplos:
    - Entrar a un directorio
        - CD + nombre de la carpeta
    - Regresar al directorio anterior
        - CD..

# DIR -> Listar el contenido del directorio "Carpetas y archivos"
# CLS -> Limpiar la ventana "Eliminar lo escrito y sus respuestas"
# Exit -> Cerrar la terminal
# COPY -> Copiar archivo
    Ejemplos:
    - Copiar archivo audio.mp3 a la carpeta "Musica"
        - COPY audio.mp3 Musica
    - Copiar archivo audio a carpeta previa
        - COPY audio.pm3 ../Documentos
    - Copiar archivo audio a otro directorio
        - COPY audio.pm3 C:\Users\Equipo\Escritorio
# MOVE -> Mover archivo "Los comandos se ingresar como COPY"
# DEL -> Eliminar archivo o ditectorio
    Ejemplos:
    - Eliminar archivo
        - DEL audio.mp3
    - Eliminar directorio
        - DEL Musica
# RENAME o REN -> Cambiar el nombre a un archivo o directorio
    Ejemplos:
    - Renombrar archivo de audio.mp3 a audio2.mp3
        - REN audio.mp3 audio2.mp3
    - Renombrar directorio de Musica a MiMusica
        - REN Musica MiMusica
# MD -> Crear directorio
    Ejemplo:
    - Crear directorio MisDocumentos
        - MD MisDocumentos