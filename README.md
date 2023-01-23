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

|Multi Selection| Single Selection |
| -------------- | ---------------- |
|![MultiSelection](https://media.giphy.com/media/RU4Zx5MEKMtPXihFZd/giphy.gif)| ![SingleSelection](https://media.giphy.com/media/u51c0ASt2GmOzRggoS/giphy.gif)|

# @Ionic-mobile-selector
Um componente Ionic semelhante ao [Ionic Select](https://ionicframework.com/docs/api/components/select/Select/), que permite pesquisa de itens e scroll infinito.

<br>

## Instalação

Utilize o gerenciador de pacotes [npm](https://www.npmjs.com/) para fazer a instalação do componente

```bash
npm install ionic-mobile-selector
```
<br>

## Como usar

### Módulo

```typescript
import { IonicMobileSelectorModule } from 'ionic-mobile-selector';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    IonicMobileSelectorModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
```

### Estrutura da Lista

Objeto que será utilizado para a listagem

```typescript
[
  {
    id:1,
    name: "Euripedes"
  },
  {
    id:2,
    name: "Gabriel"
  },
  {
    id:3,
    name: "Elisa"
  },
  {
    id:4,
    name: "Lucas"
  },
  {
    id:5,
    name: "Felipe"
  },
  {
    id:6,
    name: "Diego"
  },
  {
    id:7,
    name: "João Gabriel"
  }
]
  
```

### Template

```html
<ionic-mobile-selector [singleSelection]="singleSelection" placeholder="Here comes your placeholder!"  [list]="list" (imsChange)="imsChange($event)"></ionic-mobile-selector>

```

### Parâmetros

| Parâmetro         | Descrição |
| :--------         | :-------- |
| `[singleSelection]` | indica se a seleção é única|
| `[list]` | lista que será utilizada |
| `placeholder` | placeholder que será utilizado na opção|

### Eventos
| Evento         | Descrição |
| :--------         | :-------- |
| `(imsChange)` | evento que recebe as opções selecionadas|

<br>

### Resetar Seletor

Para resetar o seletor, basta obter uma instância <strong>ViewChild</strong> do component e chamacar a função <strong>clear</strong> a partir da referência!

```html
<ionic-mobile-selector #mySelector ... ></ionic-mobile-selector>

```

```typescript
@IonicPage()
@Component({
	selector: 'page-agenda',
	templateUrl: 'agenda.html',
})
export class AgendaPage {

	...

	@ViewChild('mySelector') mySelector: IonicSelectableComponent;
  
  ...
  
  public resetMySelector(): void {
    
    this.mySelector.clear();
    
  }
```
<br>

### Tema

A estilização é setada automaticamente de acordo com a cor <strong>primária</strong> do projeto, que é definido no arquivo <strong>variables.scss</strong> de aplicativos ionic.

```scss
/** Ionic CSS Variables **/
:root {
  /** primary **/
  --ion-color-primary: #28ba62;
  ...
}
```

</br>

## Ecossistema

| Tecnologia    | Versão                                                        | Links  |
| -------       | -------                                                       | :-----:|
| **ionic**     | [![version](https://badgen.net/badge/version/v6.0.0/blue)](https://ionicframework.com/docs/) | [`ionic@changelog`](https://ionicframework.com/docs/) |
| **Angular**   | [![version](https://badgen.net/badge/version/v15.0.0/blue)](https://angular.io/) | [`angular@documentation`](https://angular.io/) |

### Versões suportadas

* Ionic 6: >= 6.0.0
* Angular 15: >= 15.0.0

<br>

## Contribuições

Pull requests são bem vindos. Para mudanças importantes, abra um problema primeiro
para discutir o que você gostaria de mudar.

