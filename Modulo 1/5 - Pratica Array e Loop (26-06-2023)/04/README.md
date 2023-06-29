![](https://i.imgur.com/xG74tOh.png)

# Exercício 04

## Carrossel

Em tecnologia, um carrossel é uma sequência de imagens num site que pode mudar conforme o usuário aperta botões para a direita (>) ou para a esquerda (<), como na imagem abaixo:

![](https://i.imgur.com/8ubTDdU.jpg)

No time de desenvolvimento que você está trabalhando, você ficou responsável por programar este carrossel, que, neste caso, não passa automaticamente. Ou seja, a imagem só muda se o usuário clicar nos botões para a direita (>) ou para a esquerda (<).

Cada imagem é um item de um array. O carrossel de vocês tem 7 imagens, o que significa que elas ficam guardadas nos índices de 0 a 6 de um array.

Você deverá calcular qual é o índice da imagem que deve ser exibida a depender da quantidade de cliques que tenham sido dados nos botões da direita ou da esquerda.

Naturalmente, cada clique no botão da direita avança uma imagem, enquanto cada clique no da esquerda volta uma imagem.

Caso o usuário esteja na última imagem e clique na direita, ele volta para a primeira.

Caso o usuário esteja na primeira imagem e clique na esquerda, ele volta para a última.

A sequência de cliques feitos pelo usuário é uma informação que lhe é passada através de uma string que pode conter apenas os caracteres > e <.

Por exemplo, o string >>><> indica que o usuário apertou 3 vezes para a direita, depois uma vez para a esquerda, depois mais uma vez para a direita. Como o carrossel sempre começa na imagem primeira imagem, que é a de índice 0, isso significa que ele foi do índice 0 até o índice 3, voltou para o 2 e foi novamente para o 3. Por isso, neste exemplo o seu programa deveria imprimir o número 3 na tela.

<br>

**Formato de entrada**

A entrada será sempre uma única variável sequencia que guarda sempre uma sequencia de caracteres > ou < indicando os cliques do usuário.

<br>

**Formato de saída**

A saída deverá ser sempre um número inteiro positivo entre 0 e 6 que indica o índice da imagem que estará sendo exibida na tela após o usuário fazer todos os cliques descritos na sequência.

<br>

**Dados de entrada - Teste 01**

```
>>><>
```

**Deverá ser impresso no console:**

```
3
```

**Dados de entrada - Teste 02**

```
>
```

**Deverá ser impresso no console:**

```
1
```

**Dados de entrada - Teste 03**

```
<
```

**Deverá ser impresso no console:**

```
6
```

**Dados de entrada - Teste 04**

```
>>>>>>>>>
```

**Deverá ser impresso no console:**

```
2
```

---

Preencha a checklist para fazer os exercícios:

-   ✅ Exercícios realizados na plataforma HackerRanck
    https://www.hackerrank.com/contests/arrays-e-loops/challenges

###### tags: `módulo 1` `exercício de classe` `lógica` `matemática` `nodeJS`
