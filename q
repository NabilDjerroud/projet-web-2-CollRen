[33mcommit 03536520d4d31553e31e1bddfa8c12788e4688e5[m[33m ([m[1;36m -> [m[1;32mstyle-nav[m[33m)[m
Author: NabilDjerroud <nabil.djerroud93@hotmail.com>
Date:   Thu Jul 4 02:35:48 2024 -0400

    Ajuster la page apropos et integration du style de la maquette

[33mcommit 51870d14d92db2d137b52a25c32a6da3a678aa9b[m
Author: NabilDjerroud <nabil.djerroud93@hotmail.com>
Date:   Thu Jul 4 01:56:46 2024 -0400

    ajuster l'apparence du composant UserCreate selon la maquette

[33mcommit 8a93d64fd02795268040c05d4a8cfe6b5fcbe1ff[m
Author: NabilDjerroud <nabil.djerroud93@hotmail.com>
Date:   Thu Jul 4 01:42:40 2024 -0400

    Ajuster le footer et l'inserer dans App, ajout du style pour le
    composant Login

[33mcommit c2695c41cc7e3b543fc89819d75c6b4f3b68b922[m
Author: NabilDjerroud <nabil.djerroud93@hotmail.com>
Date:   Thu Jul 4 00:37:59 2024 -0400

    Ajout du composant Footer et intégré dans l'accueil

[33mcommit f73c42fae4b431e70adbec10a812912e253c59f7[m
Author: NabilDjerroud <nabil.djerroud93@hotmail.com>
Date:   Wed Jul 3 13:23:23 2024 -0400

    ajout du style pour la navigation couleur de fond et police

[33mcommit 97ad4e164ab67cef22356df57666b73562b287c4[m[33m ([m[1;31mprojet2Bilou/dev[m[33m, [m[1;32mdev[m[33m)[m
Merge: 0ca85a9 dee03b7
Author: Nabil <144846468+NabilDjerroud@users.noreply.github.com>
Date:   Tue Jul 2 08:07:51 2024 -0400

    Merge pull request #42 from 582-41E-MA/b-404
    
    Route pour page 404

[33mcommit dee03b76bb49a21563a8bdfc2e701da145d3e92a[m
Author: René de Montigny <e2395944@cmaisonneuve.qc.ca>
Date:   Thu Jun 27 14:38:36 2024 -0400

    Ajout la route pour la page 404 tâche #32

[33mcommit 0dd08993269b080f6a471448c53297a972e36bce[m
Merge: ec66948 0ca85a9
Author: René de Montigny <e2395944@cmaisonneuve.qc.ca>
Date:   Thu Jun 27 12:05:39 2024 -0400

    Merge branch 'dev' into auth

[33mcommit ec66948092f0a2e67292d1bb9c2177cbe74bb690[m
Author: René de Montigny <e2395944@cmaisonneuve.qc.ca>
Date:   Thu Jun 27 11:57:12 2024 -0400

    Créer routing login/logout/auth
    
    Tâche / 89
    
    L'utilisateur peut se connecter, se déconnecter et éventuellement,
    certaines routes seront accessibles seulement si le token le permet via
    auth.

[33mcommit 0ca85a915cb6241599c5217bc98d8abc1f37ac50[m
Merge: de86afe fe26ffb
Author: René de Montigny <135033133+CollRen@users.noreply.github.com>
Date:   Thu Jun 27 12:01:08 2024 -0400

    Merge pull request #37 from 582-41E-MA/auth
    
    Auth

[33mcommit fe26ffb958bca104e6d25a8cfe74681e66cd415e[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Thu Jun 27 11:17:27 2024 -0400

    Crud Privileges fini
    
    avec toutes les traductions de données dynamiques. JE travaille maintenant sur la traduction de données estatiques dans ces composants

[33mcommit a0db8d1484a0027e783e785d399f71998c635276[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Thu Jun 27 10:04:27 2024 -0400

    PrivilegeIndex crée
    
    Maintenant c'est possible d'afficher les types de privilèges dans un tableau dans le deux langues, selon l'option dans local storage. Update et Delete s'en vient.

[33mcommit be0d27ae1bde26aadcbdff33c4a57e0bac36c2cd[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Wed Jun 26 16:10:03 2024 -0400

    Privilege crud
    
    J'ai changé quelques configurations sur le backend pour le crud privilege et pour ma conection local avec la db

[33mcommit 73970e1f536eac279460df3051dfbc4a122396fc[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Wed Jun 26 16:07:41 2024 -0400

    Crud Privileges
    
    Maintenant il y a une interface frontend pour ajouter un nouveau privilege. Update et delete plus tart

[33mcommit 5c04cd599a7f058b4c09358dfcda901220bc16f0[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Wed Jun 26 10:57:30 2024 -0400

    Début Authorization

[33mcommit de86afe4cbc4d178faf9c223e6a8424bca773084[m
Merge: f2eb3d6 c55bed1
Author: Clara Quintela <49873002+claraquintela@users.noreply.github.com>
Date:   Wed Jun 26 16:11:29 2024 -0400

    Merge pull request #36 from 582-41E-MA/auth
    
    Auth

[33mcommit c55bed1528631dec59a1ea15abcf3cdf11bb9edd[m
Author: René de Montigny <e2395944@cmaisonneuve.qc.ca>
Date:   Wed Jun 26 15:45:00 2024 -0400

    Ajoutervérif + hash à la création d'un utilisateur
    
    Si le nom_utilisateur est déjà utiliser la requête
    retourne un message d'erreur. Sinon, l'utilisateur
    est créé et son mot de passe est hash.

[33mcommit b1de54b0115cea69492f94c7ddbd1ba198555ef0[m
Merge: c553bc1 f2eb3d6
Author: René de Montigny <e2395944@cmaisonneuve.qc.ca>
Date:   Wed Jun 26 14:40:53 2024 -0400

    Merge branch 'dev' into auth

[33mcommit f2eb3d6a41af93090e22677c887ff0c53ab250f9[m
Merge: 13a1f2b 84b6de8
Author: René de Montigny <135033133+CollRen@users.noreply.github.com>
Date:   Wed Jun 26 10:56:33 2024 -0400

    Merge pull request #31 from 582-41E-MA/user-show
    
    User show

[33mcommit 84b6de8056442ca21c2fb819d164d39ff297e345[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Tue Jun 25 20:06:29 2024 -0400

    CRUD Utilisateur finalisé
    
    tout était tester. Maintenant je me lance sur authorization

[33mcommit 13a1f2b80d62fd1ef5280636fa55b99efc68725b[m
Merge: 3ae6718 f410f25
Author: Clara Quintela <49873002+claraquintela@users.noreply.github.com>
Date:   Tue Jun 25 19:11:50 2024 -0400

    Merge pull request #30 from 582-41E-MA/bd
    
    Bd

[33mcommit 3ae6718cc5535f98ebafec086945189674041eca[m
Merge: bb7fccf 10dac03
Author: Clara Quintela <49873002+claraquintela@users.noreply.github.com>
Date:   Tue Jun 25 19:11:31 2024 -0400

    Merge pull request #28 from 582-41E-MA/server
    
    Server

[33mcommit c553bc1d145614b1d24539bb820ca6c6c4b20e85[m
Author: René de Montigny <e2395944@cmaisonneuve.qc.ca>
Date:   Tue Jun 25 16:15:20 2024 -0400

    Ajouter nodemon pour faciliter le devloppement.

[33mcommit 63c1c1f8d7726612b5b1204b2626285589013776[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Tue Jun 25 14:45:51 2024 -0400

    User Show working! (tâche 36)
    
    C'est possible regarder la page individuel d'un client. Fonctionalité update s'en vient

[33mcommit 5317a4158f3f7b6284e67726d2c9b01353f23d80[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Tue Jun 25 14:34:02 2024 -0400

    Début user show

[33mcommit 4c4990112eab94faa141084bcfb1c008ac209836[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Tue Jun 25 14:13:25 2024 -0400

    User index working! (tache 36)
    
    Tout est beau! Route user created. La liste est affichée dans le dashboard admin

[33mcommit f410f250d587c0731c73bf1e386e14a498fcc723[m
Author: René de Montigny <e2395944@cmaisonneuve.qc.ca>
Date:   Tue Jun 25 13:39:38 2024 -0400

    Ajouter villes et Provinces à la BD sql

[33mcommit 4a6733d0a5a1559f92151f005149343f58a86c70[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Tue Jun 25 12:57:43 2024 -0400

    Re-création de la page user index
    
    Pour un motif unconnu, tou avait disparu. Même chose pour le composant DashboardAdmin et le MenuDashboardAdmin. Bizarre, mais reglé

[33mcommit 10dac03e2e15139c55ca4e7fba9e2c4de68eb9ed[m
Merge: 533323a 28ffbca
Author: René de Montigny <e2395944@cmaisonneuve.qc.ca>
Date:   Tue Jun 25 12:53:23 2024 -0400

    Merge branch 'dev' into server

[33mcommit 28ffbcaea641014d7034fe16f80e286343c05ddf[m
Author: René de Montigny <e2395944@cmaisonneuve.qc.ca>
Date:   Tue Jun 25 12:02:51 2024 -0400

    Correction type de données pour 3 modèles
    
    La données reçue ne sera pas en JSON, mais en texte.
    
    Étant donnée que ce n'est pas nécessaire de les traduires

[33mcommit 82603c1c972c92cb58ae22963bfbbe5d43f2ac14[m
Author: René de Montigny <e2395944@cmaisonneuve.qc.ca>
Date:   Tue Jun 25 12:00:49 2024 -0400

    Ajuster les variables des Ports du backend
    Corrections

[33mcommit bb7fccfc773c28d0194609f87f6058d35f9a618e[m
Merge: 03fd63b 690cd89
Author: René de Montigny <135033133+CollRen@users.noreply.github.com>
Date:   Tue Jun 25 12:10:04 2024 -0400

    Merge pull request #27 from 582-41E-MA/user-create
    
    User create

[33mcommit 533323a9d81db582369df0e18aaa0e9eeb4d2201[m
Author: René de Montigny <e2395944@cmaisonneuve.qc.ca>
Date:   Tue Jun 25 12:02:51 2024 -0400

    Correction type de données pour 3 modèles
    
    La données reçue ne sera pas en JSON, mais en texte.
    
    Étant donnée que ce n'est pas nécessaire de les traduires

[33mcommit 21bf6a50d063841c3d1d2e01e3188ffe2894fea5[m
Author: René de Montigny <e2395944@cmaisonneuve.qc.ca>
Date:   Tue Jun 25 12:00:49 2024 -0400

    Ajuster les variables des Ports du backend
    Corrections

[33mcommit 690cd89eaa8615599dab0995aa028610585c7de6[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Tue Jun 25 11:50:04 2024 -0400

    Début user index

[33mcommit 98508b463a900fe35e14cd711fc0cc21ad5473b2[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Tue Jun 25 11:39:35 2024 -0400

    User Create working! (tâche 35 fini)
    
    Maintenant c'est possible d'ajouter un utilisateur. Son privilège par default est 3 (client)

[33mcommit dbd26b373ee5d45db5edda5b2d9c30f66910e35e[m
Author: René de Montigny <e2395944@cmaisonneuve.qc.ca>
Date:   Tue Jun 25 11:26:47 2024 -0400

    Rend disponible toutes les origines pour Cors
    
    En effet, en développement il est préférable de ne bloquer
    aucune source.

[33mcommit f228a81ba200e0aba881b72170848c28a0bb9d68[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Tue Jun 25 10:43:39 2024 -0400

    Config de la db

[33mcommit 96ffcf9d4d4fabaf4456c49974c0ec3f4f1d6252[m
Merge: 39fd146 03fd63b
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Tue Jun 25 10:04:39 2024 -0400

    Merge branch 'dev' of https://github.com/582-41E-MA/projet-web-2-CollRen into dev

[33mcommit 03fd63b1c49241f5967fce22f24754daf10e8cae[m
Merge: f920ed6 9708168
Author: René de Montigny <135033133+CollRen@users.noreply.github.com>
Date:   Tue Jun 25 09:59:09 2024 -0400

    Merge pull request #26 from 582-41E-MA/user-create
    
    User create

[33mcommit 97081687b394c5d3dab0fb45635a3c9956e4f477[m
Merge: 1f6aa52 f920ed6
Author: Clara Quintela <49873002+claraquintela@users.noreply.github.com>
Date:   Tue Jun 25 09:58:21 2024 -0400

    Merge branch 'dev' into user-create

[33mcommit f920ed6de612a0a39c9f75b633e41cf48a47e9ea[m
Merge: 5d9ce8e 056e1ce
Author: Clara Quintela <49873002+claraquintela@users.noreply.github.com>
Date:   Tue Jun 25 09:44:51 2024 -0400

    Merge pull request #23 from 582-41E-MA/server
    
    Mettre à jour branche server

[33mcommit 056e1ce087a4b5eeb44f3daf1d1baccad59c2d80[m
Author: René de Montigny <e2395944@cmaisonneuve.qc.ca>
Date:   Tue Jun 25 09:15:42 2024 -0400

    Ajouter une première version du SQL
    
    Afin de créer une base de données locale avec quelques
    données.

[33mcommit d2525c0955c6880ccad17039cd9f87d751f126e3[m
Author: René de Montigny <e2395944@cmaisonneuve.qc.ca>
Date:   Tue Jun 25 09:08:56 2024 -0400

    Ajouter les tables restantes
    
    Les tables du diagramme sont maintenant les mêmes
    que les modèles du projet.

[33mcommit ff50a2cd9039dc921a2fa84afbab461143bca3c3[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Wed Jun 19 11:53:50 2024 -0400

    Ajouter de bibliothèque de traduction
    J'ai fait de tests dans les autres composants et tout marche!!! YAY!
    Avec ce commit, j'ai fini la tache id 63 du backlog

[33mcommit aa056780345dba87f54c03873fb4da8b19fecbcc[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Tue Jun 18 14:41:34 2024 -0400

    Installer React
    préparation de l'ambience de développement frontend

[33mcommit 39fd1461ffa81dac2240f491122a2885f89f7f3f[m
Merge: 9289b92 5d9ce8e
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Tue Jun 25 09:15:37 2024 -0400

    Merge branch 'dev' of https://github.com/582-41E-MA/projet-web-2-CollRen into dev

[33mcommit 5d9ce8eddf8dcc767fd28bc0b47f9d2bdd99c81c[m
Merge: 7135ecb ad9c3b0
Author: Clara Quintela <49873002+claraquintela@users.noreply.github.com>
Date:   Tue Jun 25 09:03:36 2024 -0400

    Merge pull request #20 from 582-41E-MA/server
    
    Server

[33mcommit 1f6aa52a0361825aac37949878baefac2e6db68d[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Sun Jun 23 16:12:43 2024 -0400

    Ajuste css Nav (font size)

[33mcommit d25c49102d96e1fb62f4d247847cb8b90dcb9bbf[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Sun Jun 23 16:10:04 2024 -0400

    Ajuste css

[33mcommit 026de9c83e9d4f2e11f85e85b5b0121767dd315d[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Sun Jun 23 16:00:17 2024 -0400

    Ajout de la logo
    
    Amélioration de la navigation provisoire

[33mcommit 64a0e77f8b55effa7742d3bca49f3e23ec877305[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Sun Jun 23 15:44:40 2024 -0400

    Ajout a propos
    
    Juste parce que j'ai eu trop de temps entre les mains ce dimanche, je crée la page À propos déjà... à l'intérieur d'une mauvaise branche. Désolée

[33mcommit 2b70eb79e4208b12b1267bb9ec6e2b4ba0717fb2[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Sun Jun 23 15:03:29 2024 -0400

    Form user Create preparé et traduit
    
    En attent de l'API pour finir de l'installer

[33mcommit 22b60d3f76d1e493141e9add48525eba8a978051[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Sun Jun 23 14:26:47 2024 -0400

    Form login ajustes

[33mcommit cf25ac15e4f6fbc6120aaef9507c638a40d23bdc[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Sun Jun 23 13:58:43 2024 -0400

    Form Login in progress
    
    Ajustes de form. En attent de l'API pour continuer tests

[33mcommit ffcac528dcc7821dd9694999f38182e30e645fda[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Sun Jun 23 11:12:42 2024 -0400

    UserCreate form on going

[33mcommit 65cb82bdc7df331b35a2c816bb713cb469b65628[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Sun Jun 23 11:11:44 2024 -0400

    Form create user (in progress)
    
    Je travail sur le form.

[33mcommit 562cce33d7469dfa91c7127ae3d28ecac0c9f276[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Fri Jun 21 13:52:30 2024 -0400

    Test formulaires
    
    Premier test de form (UserCreate). En attent des info de la db pour suivre.

[33mcommit 0c408de87071bd836a4e3de5e59e1ffc6cba67a0[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Sun Jun 23 12:18:35 2024 -0400

    Ajout de la bibliothèque Tailwind
    
    Premiers tests avec les composants Tailwindcss et la traduction

[33mcommit 9289b924a57e064850c05e8238aed74b0753257f[m
Merge: 7135ecb 85f0a15
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Sun Jun 23 12:14:41 2024 -0400

    Merge branch 'main' into dev

[33mcommit ad9c3b01a0fc7276bb4b29fea8ed8026006072d8[m
Merge: 032f735 7135ecb
Author: René de Montigny <135033133+CollRen@users.noreply.github.com>
Date:   Fri Jun 21 14:27:31 2024 -0400

    Merge branch 'dev' into server

[33mcommit 85f0a157ee73fbbe1344e5f7bf89a66020f3373f[m
Merge: c689325 d1cef7c
Author: René de Montigny <135033133+CollRen@users.noreply.github.com>
Date:   Fri Jun 21 14:25:29 2024 -0400

    Merge pull request #18 from 582-41E-MA/langues
    
    Langues tache 33

[33mcommit d1cef7c89a9ebfe9415b3b0bcc641d2a477cb105[m
Merge: 7f8c845 c689325
Author: René de Montigny <135033133+CollRen@users.noreply.github.com>
Date:   Fri Jun 21 14:25:00 2024 -0400

    Merge branch 'main' into langues

[33mcommit 032f7357a6a4e57c50089e28af329f8961dd057f[m
Author: René de Montigny <e2395944@cmaisonneuve.qc.ca>
Date:   Fri Jun 21 14:16:42 2024 -0400

    Réorganiser le backend
    
    Création des tables utilisateurs, villes et provinces.
    
    Tâches # 28 à 31

[33mcommit 7f8c84550ccde387790bb34ac874e53e7c71617e[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Thu Jun 20 14:57:29 2024 -0400

    Re-installer la bibliothèque i18n

[33mcommit 159ad632ac34eb8f98791bf9b3e53a2495c8cd3c[m
Author: Clara Quintela <claraquintela@gmail.com>
Date:   Thu Jun 20 14:18:13 2024 -0400

    Langues tache 33
    
    Maintenant la langue par default du site c'est le fr. Les infos sur la langue est mise authomatiquement dans le localStorage. Si l'utilisateur utilise les boutons pour changer la langue, le local storage change à nouveau.
    Ça va être utile bientôt quand on traduit les donnes dynamiques.
