# grandHopitalDeCharleroi_TestTechnique

## contexte:

Dans le cadre de ma candidature comme développeur front-end au **Grand Hopital 		de Charleroi** (GHdC), il m' été demandé de réaliser cette application en tant 	que **test technique** destiné à vérifier mes compétences.

## manuel d'utilisation:

### paramètrer

A l'ouverture initiale de l'application **dans le navigateur** l'écran affiche des graphes vides et un bouton intitulé "**paramètres**". Cliquez sur ce bouton pour accéder aux paramètres de l'application.

Vous pouvez fermer la boite de paramètrage à tout moment en cliquant au dehors de la boite ou sur **retour**, qui prend la place de **paramètres** lorsque la boite est ouverte. Les modifications que vous faîtes resteront enregistrée, à moins que vous n'actualisiez la page.


### définir les patients

Une fois la boite de paramètrage ouverte, les première options à définir sont les patients dont on veut afficher les données.

Pour sélectionner **un à quatre patients**, cliquez sur l'onglet **Patients** en haut à gauche de la boite de paramètrage. Sa couleur bleue indique que vous êtes en train de définir les paramètres des patients.

Cette partie de la boite de paramètrage se distincte par deux blocs:

* le formulaire
* la liste des patients


#### Le formulaire:
**Le formulaire** permet de restreindre la liste des patients et possède deux fonctions:

* la recherche par id:
Qui écrase tous les autres paramètres de restriction pour afficher uniquement le patient correspondant à **l'id entré**, qu'il corresponde ou non aux paramètres de restriction.

* la recherche paramètrée:
Qui restreint la liste des patients aux patients correspondant strictement à **toutes les conditions** entrées dans les champs du formulaire.

Pour afficher la liste des patients correspondants à votre recherche, cliquez sur le bouton **Rechercher**.

Pour **remettre les paramètres de recherche à zero**, cliquez sur le bouton noir à flèches blanches. Si vous désirez afficher la liste de tous les patients connus de l'application, cliquez ensuite sur le bouton **Rechercher**.


#### La liste des patients

**La liste des patients** affiche les patients acceptés par les paramètres du formulaire. Si aucun paramètre n'est définis, alors la liste comprends tous les patients connus de l'application.

Elle affiche également le **nombre de patients** répondant aux paramètres de restriction, ce qui vous permet, de visionner la part que prennent ces patients dans la population totale des patients connus de l'application.

Pour **sélectionner un patient**, cliquez sur le bouton portant son nom dans la liste des patients. Les données du patients s'afficheront automatiquement dans l'application.


#### Les patients sélectionnés

**Sur ordinateur**, les **patients sélectionnés** s'affichent en haut de la page, vous pouvez cliquer sur les boutons rouges à leur droite pour les désélectionner. Les patients sélectionnés n'apparaissent pas dans la liste des patients.

**Sur tablette ou smartphone**, cliquez sur le bouton représentant **trois lignes roses** (en haut à droite) pour avoir un **apercu des patients sélectionnés**, le processus de suppression est le même que sur odinateur. Le bouton affiche une **croix**, cliquez dessus si vous ne désirez **plus voir** les patients sélectionnés.


### Définir les graphiques à afficher

Pour définir les **graphiques à afficher**, cliquez sur l'onglet **Données** en haut à droite de la boite de paramètrage. Sa couleur bleue indique que vous êtes en train de définir les graphiques à afficher.

Cette partie contient la liste des différents graphiques disponibles. Si le bouton est bordé de **bleu**, cela signifie que **le graphique est affiché** dans l'application. Sinon qu'**il ne l'est pas**.

**Cliquez** sur un bouton pour **activer ou désactiver** l'affichage du graphique correspondant au nom sur ce bouton.


### Lire les données

La page principale de l'application affiche des **tableaux** contenant les données des **patients sélectionnés**. Chaque patient a sa **couleur** et un id unique. Ils sont utilisés pour identifier les patients au sein des graphiques.

Les grahiques se lisent comme suit:

* le **titre** stipule la donnée représentée.

* l'**axe vertical** indique **le niveau et l'unité de la valeur**, si une barrette de couleur atteint ce niveau, cela signifie que le patient identifié par cette couleur ou l'id au pied de la barrette atteint cette valeur pour la donnée ciblée par le graphique.

* sur l'**axe horizontal**, les ids des patients représentés par les **barrettes de couleur**.

Sur **ordinateur**, laissez votre curseur sur une barrette pour afficher la **valeur chiffrée** représentée par celle ci.

Vous pouvez aussi laisser votre curseur sur l'id en desous de la barette pour afficher un rappel du **nom du patient**. Ce nom est aussi affiché en haut de page dans la **liste des patients sélectionnés** dans la **couleur** qui le représente.

Vous pouvez **visionner cette liste sur tablette ou smartphone** à tous moment en utilisant le bouton représentant **trois lignes roses** en haut à droite de l'écran.
Utilisez la **croix** à la même place pour **ne plus voir** cette liste.
