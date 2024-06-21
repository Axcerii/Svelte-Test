<nav>
    <a href="/">Home</a>
    <a href="/projets">Projets</a>
    <a href="/contact">Contact</a>
</nav>

<slot />

<style>
    nav{
        display: flex;
        width: 100%;

        padding: 0 0 0 1em;
        margin: 0 0 3em 0;

        border-bottom: black solid 1px;
    }

    nav > a{
        margin: 1em;
        padding: 1em;

        color: black;
        text-decoration: none;
    }

    nav > a:hover{
        color: orangered;
        text-decoration: underline;
    }
</style>