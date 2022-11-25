/*
O — Open-Closed Principle (Princípio Aberto-Fechado)

Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação.

Isso significa que uma classe deve ser extensível sem modificar a própria classe.

Conforme o software é desenvolvido, mais recursos vão sendo necessários para que a aplicação funcione como esperado.

Esse princípio nos diz que, ao criar um objeto ou entidade, devemos prepará-lo para que possa ser implementado por outro futuramente. Assim, não será necessário modificar o objeto pai.

Dessa forma, conseguiremos manter nossos objetos desacoplados de outros, podendo futuramente alterar bibliotecas e frameworks, ou até mesmo adicionar novas funções apenas criando uma classe implementando o objeto original.

Perguntas que devem ser respondidas durante essa aula:

Qual o conceito e objetivos desse princípio?
Qual a motivação?
Quais os benefícios?
Como e quando aplicar?
Conceito: Os objetos ou entidades devem estar abertos para extensão, mas fechados para modificação.

Objetivo: Este princípio visa estender o comportamento de uma classe sem alterar o comportamento existente dessa classe. Isso é para evitar causar bugs onde quer que a classe esteja sendo usada.

Exemplos:

Os códigos abaixo estão em Typescript, é o mais próximo de JS possível, mas permite entender melhor certas coisas que em JS passariam batidas como classe abstrata e/ou interface.

Não utilizando o Princípio Aberto-Fechado:

public enum TipoEmail {
	Texto,
	Html,
	Criptografado
}

public void class EnviarEmail(string mensagem, string assunto, TipoEmail tipo){
	if(tipo == TipoEmail.Texto)
	{
		mensagem = this.RemoverFormatacao(mensagem);
	}
	else if(tipo == TipoEmail.Html)
	{
		mensagem = this.InserirHtml(mensagem); 
	} 
	else if(tipo == TipoEmail.Criptografado)
	{
		mensagem = this.CriptografarMensagem(mensagem);
	}
	

	this.EnviarMensagem();
}

Acima temos o exemplo de uma classe que valida o tipo de e-mail para tratar a mensagem de acordo com o seu tipo, mas, quando uma nova forma de mensagem for criada, a classe deverá ser editada e um novo if deverá ser acrescentado a ela.


Utilizando o Princípio Aberto-Fechado:

public abstract class Email
{
	public abstract void Enviar(string assunto, string mensagem);
}

public class TextoEmail : Email
{
	public override void Enviar(string assunto, string mensagem)
	{
		Util.RemoverFormatacao(mensagem);
	}
}

public class HtmlEmail : Email
{
	public override void Enviar(string assunto, string mensagem)
	{
  		Util.InserirHtml(mensagem);
	}
}

public class CriptografadoEmail : Email
{
	public override void Enviar(string assunto, string mensagem)
	{
		Util.CriptografarMensagem(mensagem);;
	}
}




Veja que na solução, criamos várias classes, cada uma com uma responsabilidade definida, suas próprias regras de negócios e sem a necessidade de alterarmos a funcionalidade padrão devido a criação de uma nova regra.

Atividade 2
*/
