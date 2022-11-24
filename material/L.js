/* 
L — Liskov Substitution Principle (Princípio da Substituição de Liskov)

Me lembra diagramas lógicos(todo A é B).


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

public class Conta{
  public virtual void Cobrar(decimal valor)
  {
    return valor * 10;
  }
}

public class ContaGratuita : Conta{
  public override void Cobrar(decimal valor)
  {
    //Não faz nada aqui 
  }
}

Utilizando o da Substituição de Liskov:

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


Atividade 3

ex: class pacoteOffice{

}

*/