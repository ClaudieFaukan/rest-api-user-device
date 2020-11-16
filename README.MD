## Informations générales
Rest-Api-User-Device est un middleware pour Express nottament, qui permet d'effectuer la recherche dans les requetes.headers['f2UserDevice'] si l'utilisateur posède un uuid associer. Recherche dans la bdd associer . Retourne null ou l'objet userDevice

## Installation

yarn add f2-rest-api-user-device

## Auteur

Rufux

## Utilisation

- Créer un finder issu de l'interface RestApiUserDeviceFinder, utilisant comme paramètre un uuid:string et retourne une promesse <UserDevice | null >

- Le middleware getUserDeviceHandler prend en paramètre le finder précédement créer et retourne une RequestHandler(issu de f2-rest-api).

- getUserDeviceHandler va checker la req.headers[f2UserDevice] si présent, tente de trouver dans le finder.find(uuid)
    - Si pas d'erreur:
        - l'userDevice est hydrater dans req.userDevice = {objet userDevice} | { null }
    - Si autre :
        - retourne une erreur

## Example

Se référer au dossier tests    