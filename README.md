# api-bhbus

## Tecnologia
 A Api foi desenvolvida em NodeJs com uma licensa de código livre, quem tiver interesse pode baixar e utilizar.
 O banco utilizado é o MongoDB.
## Métodos
Todos os métodos são do tipo <b>GET</b> retornam dados no formato Json.

### BuscarLinhas
 > Retorna uma lista contendo o código da linha, número empresa, tipo tarifa, nome da linha, valor tarifa, data vigente e tipo de transporte.
 
### BuscarLinhaByNum
> Retorna o código da linha, número empresa, tipo tarifa, nome da linha, valor tarifa, data vigente e tipo de transporte.

### BuscarRotaLinhaSemCoordenadas
> Retorna o código da linha, número empresa, tipo tarifa, nome da linha, valor tarifa, data vigente e tipo de transporte.

### BuscarRotaLinhaComCoordenadas
> Retorna o código da linha, número empresa, tipo tarifa, nome da linha, valor tarifa, data vigente e tipo de transporte.

### BuscarQuadroHorarioByLinha
 > Retorna uma lista com os horários da linha selecionada.
 
### BuscarQuadroHorario
 > Retorna uma lista com os horários de todas as linhas.<br>
 Atenção, essa consulta pode ser demorada, aproximadamente 60.000 registros.
