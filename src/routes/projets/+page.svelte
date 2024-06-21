<script>
    import Projet from "./projet.svelte";
    import Formulaire from './formulaire.svelte';

    /* On initialise les variables des projets */

    let projet1 = {title: '', body: ''};
    let projet2 = {title: '', body: ''};

    /* On récupère les données de l'API de JSONPlaceHolder */

    async function fetchProjects(){
        const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
        const projets = await reponse.json();

        return projets;
    }

    fetchProjects().then(projets => {
        projet1 = projets[0];
        projet2 = projets[1];
    });
</script>

<h1>Projets</h1>
<div class='conteneur'>
    <div class='projets'>
        
        <Projet nom = {projet1.title}
        description = {projet1.body}
        />
        
        <Projet nom = {projet2.title}
        description = {projet2.body}
        />
    </div>
    
    <div class='formulaire'>
        <Formulaire />
    </div>
</div>

<!-- Style de Base -->

<style>
    
	h1{
		margin: 2em 0 0 3em;
	}

    .projets{
        width: 40%;
        padding: 5%;
    }

    .formulaire{
        display: flex;
        margin: 5% auto;
        width: 30%;
    }

    /* STYLE MOBILE */

    @media only screen and (max-width : 500px) {
        h1{
            margin: 2em 0 0 1em;
        }

        .projets{
            width: 90%;
        }
        .formulaire{
            width: 90%;
        }
    }
</style>

