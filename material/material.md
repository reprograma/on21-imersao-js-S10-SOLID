# SOLID

Perguntas que devem ser respondidas durante essa aula:

O que é SOLID?
Por que utilizar?
Quais os benefícios?
SOLID é um acrônimo criado por Michael Feathers que representa os 5 princípios da programação orientada a objetos identificados por Robert Cecil Martin ou Uncle Bob nos princípios de 2000.

Sequencia de siglas ou vogais que formam uma unica palavra em que cada letra representa um palavra diferente

<a id="voltar"></a>
<a name="ancora"></a>

- [S — Single Responsiblity Principle (Princípio da Responsabilidade Única](#s)
- [O — Open-Closed Principle (Princípio Aberto-Fechado)](#o)
- [L — Liskov Substitution Principle (Princípio da Substituição de Liskov)](#l)
- [I — Interface Segregation Principle (Princípio da Segregação de Interface)](#i)
- [D — Dependency Inversion Principle (Princípio da Inversão da Dependência)](#d)

<a id="s"></a>

### S — Single Responsiblity Principle (Princípio da Responsabilidade Única)

Uma classe deve ter um e apenas um motivo para mudar, o que significa que uma classe deve ter apenas um trabalho.

Uma classe deve ter um, e somente um, motivo para mudar

Esse princípio nos diz que cada classe dentro de um projeto deve se especializar em um único assunto e possuir uma única responsabilidade, tendo uma única tarefa ou ação para executar.

Muitas vezes, ao criar uma classe, damos a ela muitas responsabilidades, mesmo aquelas que a classe não utilizará. Ainda que pareça útil no primeiro momento, caso o programa necessite alguma alteração devido à atualização de bibliotecas ou simplesmente alguma alteração requerida pelo cliente, dificilmente teremos um resultado positivo. Isso porque, com as responsabilidades misturadas dentro da classe, temos a chance de comprometer àquelas que não necessitam alteração.

Dessa forma, ao utilizar o S do SOLID, estamos garantindo que cada classe cuidará apenas das responsabilidades necessárias para que ela funcione. Assim, não será necessário alterar todas as implementações dela em caso de alterações futuras.

Perguntas que devem ser respondidas durante essa aula:

Qual o conceito e objetivos desse princípio?
Qual a motivação?
Quais os benefícios?
Como e quando aplicar?

Conceito: Uma classe deve ter um e apenas um motivo para mudar, o que significa que uma classe deve ter apenas uma função.

Objetivo: Esse princípio visa separar comportamentos para que, se surgirem bugs como resultado de sua alteração, isso não afete outros comportamentos não relacionados. Podemos considerar esse princípio o inimigo número 1 do anti-pattern God Class.

Exemplos:

Não utilizando o Princípio da Responsabilidade Única:
<<<<<<< Updated upstream
```

=======

```
>>>>>>> Stashed changes
class Employee {
  getId() {  Código aqui  }
  setId(id) {  Código aqui  }

  getName() { Código aqui  }
  setName(name) {  Código aqui  }

  getAddress() {  Código aqui }
  setAddress(address) {  Código aqui  }

  getDesignation() {  Código aqui  }
  setDesignation(designation) { Código aqui  }

  getSalary() {  Código aqui  }
  setSalary(salary) {  Código aqui  }

  fetchEmployeeDetails(employeeId) {  Código aqui  }
  saveEmployeeDetails(employeeDetails) {  Código aqui  }
  validateEmployeeDetails(employeeDetails) {  Código aqui  }
  exportEmpDetailsToCSV(employeDetails) {  Código aqui  }
  importEmpDetailsForDb(employeeDetails) {  Código aqui  }
}
```

Utilizando o Princípio da Responsabilidade Única:

```
class EmployeeModel {
  getId() {  Código aqui  }
  setId(id) {  Código aqui  }

  getName() {  Código aqui  }
  setName(name) { Código aqui  }

  getAddress() {  Código aqui  }
  setAddress(address) {  Código aqui  }

  getDesignation() {  Código aqui  }
  setDesignation(designation) { Código aqui  }

  getSalary() {  Código aqui  }
  setSalary(salary) {  Código aqui  }
}

class EmployeeImportExport {
    exportEmpDetailsToCSV(employeDetails) {  Código aqui  }
    importEmpDetailsForDb(employeeDetails) {  Código aqui  }
}

class EmployeeDbOperations {
    fetchEmployeeDetails(employeeId) {  Código aqui  }
    saveEmployeeDetails(employeeDetails) {  Código aqui  }
}

class EmployeeValidation {
    calidateEmployeeDetails(employeeDetails) {  Código aqui  }
}
```

[Voltar](#voltar)

<a id="o"></a>

### O — Open-Closed Principle (Princípio Aberto-Fechado)

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

```
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

```

Acima temos o exemplo de uma classe que valida o tipo de e-mail para tratar a mensagem de acordo com o seu tipo, mas, quando uma nova forma de mensagem for criada, a classe deverá ser editada e um novo if deverá ser acrescentado a ela.

Utilizando o Princípio Aberto-Fechado:

```
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
```

Veja que na solução, criamos várias classes, cada uma com uma responsabilidade definida, suas próprias regras de negócios e sem a necessidade de alterarmos a funcionalidade padrão devido a criação de uma nova regra.
[Voltar](#voltar)

<a id="l"></a>

### L — Liskov Substitution Principle (Princípio da Substituição de Liskov)

O Liskov Substitution Principle (LSP) ou Princípio de Substituição de Liskov está diretamente ligado ao OCP (Open Closed Principle) foi criado por Barbara Liskov uma grande cientista da computação americana.

Uma classe derivada deve ser substituível por sua classe base

Seja q(x) uma propriedade demonstrável sobre objetos de x do tipo T. Então q(y) deve ser demonstrável para objetos y do tipo S onde S é um subtipo de T.

Isso significa que toda subclasse ou classe derivada deve ser substituível por sua classe base ou pai.

Conceito: Se S é um subtipo de T, então os objetos do tipo T podem ser substituídos pelos objetos de tipo S sem nenhuma alteração de suas propriedades. Ou seja, uma classe derivada deve ser substituível por sua classe base.

Objetivo: Este princípio visa impor consistência para que a classe pai ou sua classe filha possam ser usadas da mesma maneira sem erros.

Apresentado por Barbara Liskov em 1987, em sua conferência “Data abstraction”, o princípio, de forma simplificada diz: “se S é um subtipo de T, então os objetos do tipo T, em um programa, podem ser substituídos pelos objetos de tipo S sem que seja necessário alterar as propriedades deste programa.”

Sendo mais direto, esse princípio nos diz que, se uma função necessita de uma classe que está sendo implementada por outras, podemos utilizar tanto a classe base quanto as classes que são derivadas desta primeira. Isso porque todas seguem os mesmos padrões, alterando apenas as implementações da original.

Este princípio nos garante o desacoplamento dos nossos objetos, possibilitando uma melhor manutenção e atualização do nosso código quando necessário.

Exemplos:

Os códigos abaixo estão em Typescript, é o mais próximo de JS possível, mas permite entender melhor certas coisas que em JS passariam batidas como classe abstrata e/ou interface.

Não utilizando o Princípio da Substituição de Liskov:

```
public class Conta{
  public virtual void Cobrar(decimal valor)
~  {
    return valor * 10;
  }
}

public class ContaGratuita : Conta{
  public override void Cobrar(decimal valor)
  {
    //Não faz nada aqui
  }
}
```

Utilizando o da Substituição de Liskov:

```
public class T { //... }

public class S : T { //... }

public static class ProgramP
{
    public static string AcceptObject(T obj)
    {
        return "ok !";
    }
}

class Program
{
    static void Main(string[] args)
    {
        var x1 = new T();
        var x2 = new S();

        //Aceita o objeto do tipo T
        Console.WriteLine(ProgramP.AcceptObject(x1));

        //Aceita objeto do tipo S que é um subtipo de T
        Console.WriteLine(ProgramP.AcceptObject(x2));
    }
}
```

[Voltar](#voltar)

<a id="i"></a>

### I — Interface Segregation Principle (Princípio da Segregação de Interface)

Um cliente nunca deve ser forçado a implementar uma interface que não usa, ou os clientes não devem ser forçados a depender de métodos que não usam.

Esse princípio mostra que devemos criar interfaces mais específicas para nossos objetos, ao invés de uma classe mais genérica para todos do mesmo tipo.

Dessa forma, conseguiremos dar mais segurança às classes criadas em nossos programas. Isso porque, com interfaces mais específicas, colocamos apenas os atributos e as funções que aquela classe que a implementação utilizará.

Perguntas que devem ser respondidas durante essa aula:

Qual o conceito e objetivos desse princípio?
Qual a motivação?
Quais os benefícios?
Como e quando aplicar?
Conceito: Um cliente nunca deve ser forçado a implementar uma interface que ele não usa, ou os clientes não devem ser forçados a depender de métodos que não usam.

Objetivo: Este princípio visa dividir um conjunto de ações em conjuntos menores para que uma classe execute APENAS o conjunto de ações que necessita.

Exemplos:

Os códigos abaixo estão em Typescript, é o mais próximo de JS possível, mas permite entender melhor certas coisas que em JS passariam batidas como classe abstrata e/ou interface.

Não utilizando o Princípio da Segregação de Interface:

```
public interface ITelefone{
  void Tocar();
  void Discar();
  void TirarFoto();
}

public class TelefoneCelular : ITelefone{
  public void Tocar() { ... }
  public void Discar() { ... }
  public void TiraFoto() { ... }
}

public class TelefoneComum : ITelefone{
  public void Tocar() { ... }
  public void Discar() { ... }
  public void TiraFoto() {
    throw new NotImplementedException();
  }
}
```

Perceba que a classe TelefoneCelular implementou a interface corretamente e todos os métodos eram usuais a classe.

Já para a classe TelefoneComum tivemos um método que lançou uma Exception, pois aquele metódo não tinha utilidade para a classe.

Percebemos que criarmos uma Interface genérica e nada específica às nossas classes isso pode gerar complexidade e difícil manutenção posterior ao código.

Utilizando o Princípio da Segregação de Interface:

```
public interface ITelefoneCelular
{
  void Tocar();
  void Discar();
  void TirarFoto();
  void Conectar3G();
}

public interface ITelefoneComum
{
  void Tocar();
  void Discar();
}

public class TelefoneCelular : ITelefoneCelular{
  public void Tocar() { ... }
  public void Discar() { ... }
  public void TiraFoto() { ... }
  public void Conectar3G() { ... }
}

public class TelefoneComum : ITelefoneComum{
  public void Tocar() { ... }
  public void Discar() { ... }
}
```

[Voltar](#voltar)

<a id="d"></a>

### D — Dependency Inversion Principle (Princípio da Inversão da Dependência)

As entidades devem depender de abstrações, não de concreções. Ele afirma que o módulo de alto nível não deve depender do módulo de baixo nível, mas devem depender de abstrações.

Conceito: Dependa de abstrações e não de implementações.

Objetivo: Este princípio visa reduzir a dependência de uma classe de alto nível na classe de baixo nível, introduzindo uma interface.

Sobre esse princípio, Uncle Bob nos confere duas definições:

“Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender da abstração”;
“Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações”.
Com a Inversão de Dependência, conseguimos desacoplar nossas classes de bibliotecas específicas e fazer com que outras ferramentas possam ser utilizadas no lugar desta primeira. Assim, as classes utilizarão abstrações de interfaces ao invés de outras classes ou de instâncias objetos.

Exemplos:

Os códigos abaixo estão em Typescript, é o mais próximo de JS possível, mas permite entender melhor certas coisas que em JS passariam batidas como classe abstrata e/ou interface.

Não utilizando o Princípio da Inversão de Dependência:

```
public class Interruptor
{
  private Ventilador _ventilador;

  public void Acionar()
  {
    if(!_ventilador.Ligado)
      _ventilador.Ligar();
    else
      _ventilador.Desligar();
  }
}

public class Ventilador
{
  public bool Ligado {get; set; }

  public void Ligar() { ... }

  public void Desligar() { ... }
}
```

No exemplo, podemos perceber que além de quebrar outros princípios do SOLID, a classe concreta Interruptor depende de uma outra classe concreta (Ventilador).

O Interruptor deveria ser capaz de acionar qualquer dispositivo independente de ser um ventilador uma lâmpada ou até mesmo um carro.

Utilizando o Princípio da Inversão de Dependência:

```
interface IDispositivo
{
  bool Ligado { get; set; }
  void Acionar();
  void Ligar();
  void Desligar();
}

public class Ventilador : IDispositivo
{
  public bool Ligado { get; set; }

  public void Acionar ()
  {
    if (!this.Ligado)
      this.Ligar();
    else
      this.Desligar();
  }

  public void Ligar() { ... }

  public void Desligar() { ... }
}

public class Lampada : IDispositivo
{
  public bool Ligado { get; set; }

  public void Acionar ()
  {
    if (!this.Ligado)
      this.Ligar();
    else
      this.Desligar();
  }

  public void Ligar() { ... }

  public void Desligar() { ... }
}

public class Interruptor
{
  private readonly IDispositivo _dispositivo;

  public void AcionarDispositivo()
  {
    _dispositivo.Acionar();
  }
}
```

[Voltar](#voltar)
