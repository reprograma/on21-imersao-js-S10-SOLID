/*
Exemplos:

Os códigos abaixo estão em Typescript, é o mais próximo de JS possível, mas permite entender melhor certas coisas que em JS passariam batidas como classe abstrata e/ou interface.

Não utilizando o Princípio da Inversão de Dependência:

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

No exemplo, podemos perceber que além de quebrar outros princípios do SOLID, a classe concreta Interruptor depende de uma outra classe concreta (Ventilador).

O Interruptor deveria ser capaz de acionar qualquer dispositivo independente de ser um ventilador uma lâmpada ou até mesmo um carro.

Utilizando o Princípio da Inversão de Dependência:

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

Atividade 5

*/