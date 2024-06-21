<script>
    export let form;
</script>

<h1>Contact</h1>
<div class="conteneur">
    <div class='formulaire'>
        
        <form method='POST'>
            <fieldset>
                <legend>Votre nom</legend>
                <input type="text" name='nom' id='nom' placeholder="Jean Valjean">
            </fieldset>
            
            <fieldset>
                <legend>Votre message</legend>
                <textarea name="message" id="message"
                placeholder=""></textarea>
            </fieldset>
            
            <button type='submit'>
                Envoyer le message
            </button>
        </form>
    </div>

    {#if form}
    <div class='previsualisation'>
        <p>Merci pour votre message ! <br> Voici le contenu de votre message :</p>
        <p class="nom-previsualisation p-previsualisation">{form.nom}</p>
        <p class="message-previsualisation p-previsualisation">{form.message}</p>
    </div>
    {/if}
</div>

<style>

	h1{
		margin: 2em 0 0 3em;
	}

    .formulaire{
        width: 40%;
        padding: 5%;
    }

    .previsualisation{
        width: 40%;
        padding: 5%;

        margin: 2em auto;
    }

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

    .p-previsualisation{
        margin-top: 1em;
        font-style: italic;
    }

        /* STYLE MOBILE */

        @media only screen and (max-width : 500px) {


        }
</style>