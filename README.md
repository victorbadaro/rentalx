# Cadastro de carro

**RF**<br/>
Deve ser possível cadastrar um novo carro.<br/>

**RN**<br/>
Não deve ser possível cadastar um carro com uma placa já existente.<br/>
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

**RN**<br/>
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.<br/>
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.<br/>
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**<br/>
Deve ser possível cadastrar a imagem do carro.<br/>

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
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.<br/>
O usuário deve estar logado na aplicação.<br/>
Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.

# Devolução de carro

**RF**
Deve ser possível realizar a devolução de um carro

**RN**
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.<br/>
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.<br/>
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.<br/>
Ao realizar a devolução, deverá ser calculado o total do aluguel.<br/>
Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.<br/>
Caso haja multa, deverá ser somado ao total do aluguel.

---
**RF** => Requisitos funcionais<br/>
**RNF** => Requisitos não funcionais<br/>
**RN** => Regra de negócio
