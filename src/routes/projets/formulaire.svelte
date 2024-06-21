<script>
    let lienAction = '#';
</script>

<form action="{lienAction}" method='POST'>
    <h2>Ajouter un projet</h2>

    <fieldset>
        <legend>Nom du Projet</legend>
        <input type="text" name='nom-projet' id='nom-projet' placeholder="Mon Super Projet #4">
    </fieldset>

    <fieldset>
        <legend>Description du projet</legend>
        <textarea name="description-projet" id="description-projet"
        placeholder="C'est un projet qui consiste en ..."></textarea>
    </fieldset>

    <button type='submit'>
        Ajouter
    </button>
</form>

<style>
    form{
        width: 100%;
    }

    fieldset{
        border-radius: 1em;
    }

    legend{
        font-weight: bold;
        margin-left: 2em;
        padding: 0.5em;
    }

    input{
        width: 100%;

        padding: 1em;

        border: none;
        border-radius: 1em;

        font-size: 1em;
    }

    input:focus{
        outline: none;
        border: transparent;
    }

    textarea{
        width: 100%;
        height: 10em;
        
        padding: 1em;
        
        border-radius: 1em;
        border: none;

        font-size: 1em;

        resize: none;
    }
    
    textarea:focus{
        outline: none;
        border: transparent;
    }

    button{
        padding: 1em;
        background-color: transparent;
        
        margin-top: 0.5em;

        border: 1px solid black;
        border-radius: 1em;

        font-size: 1em;

        cursor: pointer;

        transition: all ease-in-out 200ms;
    }

    button:hover{
        background-color: rgb(231, 231, 231);
    }
</style>
