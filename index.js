/* Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)
*/

class Heroi{
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar() {
        let ataque 
        switch (this.tipo) {
            case "mago":
              ataque = "magia";
              break;
            case "guerreiro":
              ataque = "espada";
              break;
            case "monge":
              ataque = "artes marciais";
              break;
            case "ninja":
              ataque = "shuriken";
              break;
            default:
              ataque = " ataque desconhecido";
          }
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}

const mago = new Heroi("Alucard", 10, "mago")
const guerreiro = new Heroi ("Sia", 30, "guerreiro")
const monge = new Heroi ("Bidu", 50, "monge")
const ninja = new Heroi ("Leo", 60, "ninja")

mago.atacar()
guerreiro.atacar()
ninja.atacar()
monge.atacar()

