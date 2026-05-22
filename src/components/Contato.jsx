function Contato() {
    return(
        <section id='contato' className="contato">
            <h1>Contato</h1>
            <form action="https://formsubmit.co/montassier.erick2009@gmail.com" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Email de contato!" />

                <label htmlFor="nome">Seu nome:</label>
                <input type="text" name="nome" id="nome" placeholder="Digite seu melhor nome." required/>

                <label htmlFor="email">Seu email:</label>
                <input type="email" name="email" id="email" placeholder="Digite seu melhor email." required/>

                <label htmlFor="telefone">Seu telefone:</label>
                <input type="number" name="telefone" id="telefone" placeholder="Digite seu melhor telefone." required/>

                <label htmlFor="contato">Seu nome:</label>
                <textarea name="contato" id="contato" placeholder="Me conte sobre seu projeto..." rows="6" required></textarea>

                <button type="submit" class="btn">Clique-me</button>
            </form>
        </section>
    )
}

export default Contato