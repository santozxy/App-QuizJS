const questions = [  
  {    
    question: "O que é uma closure em JavaScript?",    
    options: [
    "Uma função que retorna outra função",
    "Uma função que tem acesso ao escopo léxico de uma função externa",
    "Uma variável que contém uma referência a uma função",
    "Uma propriedade de um objeto que contém uma função"
    ],
    answer: "Uma função que tem acesso ao escopo léxico de uma função externa"
  },
  {
    question: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
    options: [
      "5",
      "32",
      "Erro",
      "undefined"
    ],
    answer: "32"
  },
  {
    question: "O que é o método splice() em JavaScript?",
    options: [
      "Um método que remove um item do final de um array",
      "Um método que adiciona um item no início de um array",
      "Um método que remove e adiciona elementos em um array",
      "Um método que remove um item de um array em uma posição específica"
    ],
    answer: "Um método que remove e adiciona elementos em um array"
  },
  {
    question: "O que é o operador '===' em JavaScript?",
    options: [
      "Um operador que compara valores e tipos de dados",
      "Um operador que compara apenas valores",
      "Um operador que compara apenas tipos de dados",
      "Um operador que compara se um valor é maior ou menor que outro"
    ],
    answer: "Um operador que compara valores e tipos de dados"
  },
  {
    question: "Qual é o resultado da expressão '2' == 2 em JavaScript?",
    options: [
      "true",
      "false",
      "Erro",
      "undefined"
    ],
    answer: "true"
  },
  {
    question: "O que é o método map() em JavaScript?",
    options: [
      "Um método que adiciona um item em um array",
      "Um método que remove um item de um array",
      "Um método que altera um item em um array",
      "Um método que cria um novo array com os resultados de uma função aplicada a cada elemento do array original"
    ],
    answer: "Um método que cria um novo array com os resultados de uma função aplicada a cada elemento do array original"
  },
   {
    question: 'Qual é a diferença entre let e var em JavaScript?',
    options: [
      'let é usado para declarar variáveis globais enquanto var é usado para variáveis locais.',
      'let é usado para declarar variáveis locais enquanto var é usado para variáveis globais.',
      'Não há diferença entre let e var.',
      'let é usado para declarar funções enquanto var é usado para declarar variáveis.' 
    ],
    answer: 'let é usado para declarar variáveis locais enquanto var é usado para variáveis globais.'
  },
  {
    question: 'O que significa "hoisting" em JavaScript?',
    options: [
      'É quando uma função é chamada antes de ser declarada.' ,
      'É quando uma variável é declarada dentro de uma função e não pode ser acessada fora dela.',
      'É quando uma variável ou função é declarada antes de ser utilizada.',
      'É quando uma variável é declarada fora de uma função e pode ser acessada em todo o escopo do arquivo.' 
    ],
    answer: 'É quando uma variável ou função é declarada antes de ser utilizada.'
  },
  {
    question: 'Qual é a diferença entre null e undefined em JavaScript?',
    options: [
      'Null é um valor que indica ausência de valor enquanto undefined significa que uma variável foi declarada mas ainda não foi atribuída.' ,
      'Undefined é um valor que indica ausência de valor enquanto null significa que uma variável foi declarada mas ainda não foi atribuída.' ,
      'Não há diferença entre null e undefined.' ,
      'Null é usado para declarar variáveis nulas enquanto undefined é usado para declarar variáveis não definidas.' 
    ],
    answer: 'Null é um valor que indica ausência de valor enquanto undefined significa que uma variável foi declarada mas ainda não foi atribuída.'
  },
  {
    question: 'Qual é a saída do código abaixo?\n\nconst myArray = [1, 2, 3, 4, 5];\nmyArray.pop();\nconsole.log(myArray);',
    options: [
      '[1, 2, 3, 4]' ,
      '[1, 2, 3, 4, 5]' ,
      '[2, 3, 4, 5]' ,
      '[1, 2, 3, 5]' 
    ],
    answer: '[1, 2, 3, 4]' 
  },
]

export {questions}
