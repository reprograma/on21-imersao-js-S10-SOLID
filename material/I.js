/*
Exemplos:

Os códigos abaixo estão em Typescript, é o mais próximo de JS possível, mas permite entender melhor certas coisas que em JS passariam batidas como classe abstrata e/ou interface.

Não utilizando o Princípio da Segregação de Interface:

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

Perceba que a classe TelefoneCelular implementou a interface corretamente e todos os métodos eram usuais a classe.

Já para a classe TelefoneComum tivemos um método que lançou uma Exception, pois aquele metódo não tinha utilidade para a classe.

Percebemos que criarmos uma Interface genérica e nada específica às nossas classes isso pode gerar complexidade e difícil manutenção posterior ao código.

Utilizando o Princípio da Segregação de Interface:

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

Atividade 4

*/