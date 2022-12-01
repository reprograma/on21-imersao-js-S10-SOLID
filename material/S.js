/*
SOLID
Perguntas que devem ser respondidas durante essa aula:

O que é SOLID?
acronomo em 5 princípios da programação orientada a objetos
Por que utilizar? 
Para que a classe não passe a ter conteúdos que não são pertinentes a ela
Quais os benefícios?
mais fácil de dar manutençao e visualmente é mais bonito
SOLID é um acrônimo criado por Michael Feathers que representa os 5 princípios da programação orientada a objetos identificados por Robert Cecil Martin ou Uncle Bob nos princípios de 2000.

**Sequencia de siglas ou vogais que foram uma unica palavra em que cada letra representa um palavra diferente

S — Single Responsiblity Principle (Princípio da Responsabilidade Única)
O — Open-Closed Principle (Princípio Aberto-Fechado)
L — Liskov Substitution Principle (Princípio da Substituição de Liskov)
I — Interface Segregation Principle (Princípio da Segregação de Interface)
D — Dependency Inversion Principle (Princípio da Inversão da Dependência)


-----------------//--------------------
S — Single Responsiblity Principle (Princípio da Responsabilidade Única)

Uma classe deve ter um e apenas um motivo para mudar, o que significa que uma classe deve ter apenas um trabalho.

Uma classe deve ter um, e somente um, motivo para mudar

Esse princípio nos diz que cada classe dentro de um projeto deve se especializar em um único assunto e possuir uma única responsabilidade, tendo uma única tarefa ou ação para executar.

Muitas vezes, ao criar uma classe, damos a ela muitas responsabilidades, mesmo aquelas que a classe não utilizará. Ainda que pareça útil no primeiro momento, caso o programa necessite alguma alteração devido à atualização de bibliotecas ou simplesmente alguma alteração requerida pelo cliente, dificilmente teremos um resultado positivo. Isso porque, com as responsabilidades misturadas dentro da classe, temos a chance de comprometer àquelas que não necessitam alteração.

Dessa forma, ao utilizar o S do SOLID, estamos garantindo que cada classe cuidará apenas das responsabilidades necessárias para que ela funcione. Assim, não será necessário alterar todas as implementações dela em caso de alterações futuras.



Imagem 1

Perguntas que devem ser respondidas durante essa aula:

Qual o conceito e objetivos desse princípio?
Qual a motivação?
Quais os benefícios?
Como e quando aplicar?

Conceito: Uma classe deve ter um e apenas um motivo para mudar, o que significa que uma classe deve ter apenas uma função.

Objetivo: Esse princípio visa separar comportamentos para que, se surgirem bugs como resultado de sua alteração, isso não afete outros comportamentos não relacionados. Podemos considerar esse princípio o inimigo número 1 do anti-pattern God Class.

Exemplos:

Não utilizando o Princípio da Responsabilidade Única:
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

Utilizando o Princípio da Responsabilidade Única:

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



// Atividade 1
*/