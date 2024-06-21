<script>
    export let nom = "Sans Titre";
    export let description = "Description Manquante";
    export let link = '#';
</script>


<div class='projet'>
    <a href="{link}">
        <h2>{nom}</h2>
        <p> {description}</p>
    </a>
</div>

<style>
    .projet{
        width: 100%;
        margin-bottom: 5%;
        padding: 2em;

        transition: all ease-in-out 200ms;
    }

    .projet:hover{
        box-shadow: gray 0 5px 10px 0;
        cursor: pointer;
    }

    h2{
        margin-bottom: 0.5em;
    }

    a{
        text-decoration: none;
        color: black;
    }

    .projet:not(:last-child){
        border-bottom: 1px solid black;
    }
</style>


