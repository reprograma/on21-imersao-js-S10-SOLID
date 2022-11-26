O — Open-Closed Principle (Princípio Aberto-Fechado)

Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação.

Isso significa que uma classe deve ser extensível sem modificar a própria classe.

Conforme o software é desenvolvido, mais recursos vão sendo necessários para que a aplicação funcione como esperado.

Esse princípio nos diz que, ao criar um objeto ou entidade, devemos prepará-lo para que possa ser implementado por outro futuramente. Assim, não será necessário 
modificar o objeto pai.

Dessa forma, conseguiremos manter nossos objetos desacoplados de outros, podendo futuramente alterar bibliotecas e frameworks, ou até mesmo adicionar novas 
funções apenas criando uma classe implementando o objeto original.

Perguntas que devem ser respondidas durante essa aula:

Qual o conceito e objetivos desse princípio?
Qual a motivação?
Quais os benefícios?
Como e quando aplicar?
Conceito: Os objetos ou entidades devem estar abertos para extensão, mas fechados para modificação.

Objetivo: Este princípio visa estender o comportamento de uma classe sem alterar o comportamento existente dessa classe. 
Isso é para evitar causar bugs onde quer que a classe esteja sendo usada.

Exemplos:

Os códigos abaixo estão em Typescript, é o mais próximo de JS possível, mas permite entender melhor certas coisas que em JS passariam batidas como 
classe abstrata e/ou interface.

