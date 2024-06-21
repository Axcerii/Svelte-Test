<script>
    import image from "$lib/images/Official_Art.jpg";
</script>

<div class='conteneur'>
    <div class='text-bienvenue'>
        <h1>Bienvenue !</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nobis numquam provident sequi in. Porro, ea est esse corporis quod officiis perferendis, amet sapiente iure, quae doloribus temporibus accusamus alias.</p>
    </div>

    <div class='div-image'>
        <img src="{image}" alt="Dessin d'une femme de face et d'un homme de dos devant un large océan">
    </div>
</div>

<!-- Style basique -->

<style>

    /* Gestion du Texte de bienvenue */

    .text-bienvenue{
        width: 45%;
        padding: 5%;
    }

    .text-bienvenue > h1{
        margin-bottom: 1em;
    }

    .text-bienvenue > p{
        text-align: justify;
    }

    /* Gestion de l'Image */

    .div-image{
        display: flex;
        width: 40%;
        margin: 2.5% auto;
    }
    
    .div-image > img{
        width: 100%;
    }

    /* STYLE MOBILE */
    @media only screen and (max-width : 500px) {

        .text-bienvenue{
            width: 90%;
        }

        .div-image{
            width: 95%;
        }
    }
</style>



