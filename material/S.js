/*
SOLID
Perguntas que devem ser respondidas durante essa aula:

O que é SOLID?
Por que utilizar?
Quais os benefícios?
SOLID é um acrônimo criado por Michael Feathers que representa os 5 princípios da programação orientada a objetos identificados por Robert Cecil Martin ou Uncle Bob nos princípios de 2000.

**Sequencia de siglas ou vogais que foram uma unica palavra em que cada letra representa um palavra diferente

S — Single Responsiblity Principle (Princípio da Responsabilidade Única)
O — Open-Closed Principle (Princípio Aberto-Fechado)
L — Liskov Substitution Principle (Princípio da Substituição de Liskov)
I — Interface Segregation Principle (Princípio da Segregação de Interface)
D — Dependency Inversion Principle (Princípio da Inversão da Dependência)

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



// Atividade S
*/