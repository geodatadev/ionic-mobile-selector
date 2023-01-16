<div align="center">
  <img src="https://www.geodata.com.br/wp-content/uploads/2019/07/Logo-Menor.png" alt="geodata-logo" width="" height=""/>
  <br>
</div>

<div align="center">
  <h1>Geodata - Agricultura de informação.</h1>
</div>

<div align="center">
  <h4>Melhorar a vida das pessoas envolvidas no agronegócio através de tecnologia e inovação.</h4>
</div>

<br>
<br>
<br>

# @Ionic-mobile-selector
Um componente Ionic semelhante ao [Ionic Select](https://ionicframework.com/docs/api/components/select/Select/), que permite pesquisa de itens e scroll infinto.

# Instalação

Utilize o gerenciador de pacotes [npm](https://www.npmjs.com/) para fazer a instalação do componente

```bash
npm install ionic-mobile-selector
```

# Como usar

## Módulo

```typescript
import { IonicMobileSelectorModule } from 'ionic-mobile-selector';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    IonicMobileSelectorModule,
    // SelectableGeodataModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
```

## TS

Objeto que será utilizado para a listagem

```typescript
{
  id:1,
  name: "Euripedes"
}
```

## Template

```html
<ionic-mobile-selector [singleSelection]="singleSelection" [placeholder]="placeholder"  [list]="list" (imsChange)="imsChange($event)"></ionic-mobile-selector>

```

### Parâmetros

| Parâmetro         | Descrição |
| :--------         | :-------- |
| `[singleSelection]` | indica se a seleção é única|
| `[placeholder]` | placeholder que será utilizado na opção|
| `[list]` | lista que será utilizada |

### Evento
| Evento         | Descrição |
| :--------         | :-------- |
| `(imsChange)` | evento que recebe as opções selecionadas|

### Ecossistema

| Tecnologia    | Versão                                                        | Links  |
| -------       | -------                                                       | :-----:|
| **ionic**     | [![version](https://badgen.net/badge/version/v3.0.0/blue)](https://ionicframework.com/docs/) | [`ionic@changelog`](https://ionicframework.com/docs/) |
| **Cordova**  | [![version](https://badgen.net/badge/version/v5.2.0/blue)](https://cordova.apache.org/) | [`cordova@changelog`](https://cordova.apache.org/) |
| **Angular**   | [![version](https://badgen.net/badge/version/v9.0.0/blue)](https://angular.io/) | [`angular@documentation`](https://angular.io/) |

# Versão Atual
![Geodata](https://img.shields.io/badge/style-v3.1.1-green?style=for-the-badge&label=ionic-mobile-selector)



# Contribuições

Pull requests são bem vindos. 

