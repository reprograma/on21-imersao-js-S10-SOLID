/* 
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

public class T { //... } Pai

public class S : T { //... } extenção da classe S

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
        var x1 = new T(); FUNCIONARIOS - ELIZANGELA
        var x2 = new S(); FUNCIONARIOS do RH - ELIZANGELA
        
        //Aceita o objeto do tipo T
        Console.WriteLine(ProgramP.AcceptObject(x1));
        
        //Aceita objeto do tipo S que é um subtipo de T
        Console.WriteLine(ProgramP.AcceptObject(x2));
    }
}


Atividade 3

*/

class employee{

}

subclass extends employee {
  ATUALIZA DADOS
}