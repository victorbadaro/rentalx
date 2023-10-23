# Cadastro de carro

**RF**<br/>
Deve ser possível cadastrar um novo carro.<br/>
Deve ser possível listar todas as categorias.

**RN**<br/>
Não deve ser possível cadastar um carro com uma placa já existente.<br/>
Não deve ser possível alterar a placa de um carro já cadastrado.<br/>
O carro deve ser cadastrado, por padrão, com disponibilidade.<br/>
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**<br/>
Deve ser possível listar todos os carros disponíveis.<br/>
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.<br/>
Deve ser possível listar todos os carros disponíveis pelo nome da marca.<br/>
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**<br/>
O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro

**RF**<br/>
Deve ser possível cadastrar uma especificação para um carro.<br/>
Deve ser possível listar todas as especificações.<br/>
Deve ser possível listar todos os carros.

**RN**<br/>
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.<br/>
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.<br/>
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**<br/>
Deve ser possível cadastrar a imagem do carro.<br/>
Deve ser possível listar todos os carros.

**RNF**<br/>
Utilizar o multer para upload dos arquivos

**RN**<br/>
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.<br/>
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF**<br/>
Deve ser possível cadastrar um aluguel.

**RN**<br/>
O aluguel deve ter duração mínima de 24 horas.<br/>
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.<br/>
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.

---
**RF** => Requisitos funcionais<br/>
**RNF** => Requisitos não funcionais<br/>
**RN** => Regra de negócio
