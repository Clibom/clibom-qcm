- Mise en place du projet via react-native init test
- Configurer un sdk dans le projet g�n�r� ../nom_projet/android/.. via android studio (ouvrir simplement le projet dans android studio)
- Se placer dans le repertoire du projet ./nom_projet
- Lancer react-native run-android pour executer sur le device en usb
- Plugin EsLint detection d'erreur : installer eslint dans le projet (avoir les plugins dans l'ide atom) via la commande : npm install -saave-dev eslint-config-rallycoding


Problème de "unable to load script from assets index.android.bundle"*
Effectuer les commandes de ce lien : https://stackoverflow.com/questions/44446523/unable-to-load-script-from-assets-index-android-bundle-on-windows

hot reload avec emulateur android
  - Lancer la cmd  adb shell input keyevent 82 afin d'envoyer la commande de menu sur l'émulateur. Clique sur le bouton reload du menu.
  - ATTENTION : Sur windows, lancer la commande depuis un invité de commande en admin
  - Si la commande ne fonctionne pas, tenter une déco du server adb avec adb devices (qui reload la connection) et/ou adb kill-server
