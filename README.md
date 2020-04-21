# api-bhbus

## Tecnologia
 A Api foi desenvolvida em NodeJs com uma licensa de código livre, quem tiver interesse pode baixar e utilizar.
 O banco utilizado é o MongoDB.<br>
 A API está hospeda no heroku.<br>
 Link : https://api-bhbus.herokuapp.com/
## Métodos
Todos os métodos são do tipo <b>GET</b> retornam dados no formato Json.

### BuscarLinhas
 > Retorna uma lista contendo o código da linha, número empresa, tipo tarifa, nome da linha, valor tarifa, data vigente e tipo de transporte.<br>

 ```
 https://api-bhbus.herokuapp.com/bus/BuscarLinhas
```
### BuscarLinhaByNum
> Retorna o código da linha, número empresa, tipo tarifa, nome da linha, valor tarifa, data vigente e tipo de transporte.<br>
> Ela recebe o número da linha como paramêtro

 ```
 https://api-bhbus.herokuapp.com/bus/BuscarLinhasByNum?COD_LINHA={numero_linha}
```

### BuscarRotaLinhaSemCoordenadas
> Retorna o código da linha, número empresa, tipo tarifa, nome da linha, valor tarifa, data vigente e tipo de transporte.

### BuscarRotaLinhaComCoordenadas
> Retorna o código da linha, número empresa, tipo tarifa, nome da linha, valor tarifa, data vigente e tipo de transporte.

### BuscarQuadroHorarioByLinha
 > Retorna uma lista com os horários da linha selecionada.
 
