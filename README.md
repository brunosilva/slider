# Bruno Silva - Coding Testimonials Slider

Projeto de inspiração é do [https://www.frontendmentor.io/](https://www.frontendmentor.io/)

**FOCO/OBJETIVO:** Estudo de como montar um carousel utilizando um puglin e principalmente o Gulp (em uma estrutura desenvolvida por colega de trabalho)

## Bem vindo! 👋

Slider/Carousel, utilizando Bootstrap somente para controlar o "container".

Plugin **[slick-slider](https://kenwheeler.github.io/slick/)** para dar vida ao carousel, e criado classes especificas para desenhar o formato desejado.

Gulp + SASS para desenhar o estilo e compilar para css.

O modelo criado ficou como na imagem a seguir: (Desktop e Mobile)

![desktop](https://user-images.githubusercontent.com/17436856/83641094-6d396c00-a583-11ea-9e5b-9ff0da563ace.png)

![mobile](https://user-images.githubusercontent.com/17436856/83644094-44b37100-a587-11ea-9411-0de8e6b3605f.png)


## Sobre desenvolvimento

### Gulp

Criado estrutura em formado de configuração, pegando como modelo o formato utilizado no **webpack** _(Estrutura definida por um colega de trabalho e como gostaria de entender, apliquei a mesma neste projeto)._

- gulp-functions

Atualmente tem somente uma function, que verifica se a compilação está sendo realizada em modo produção ou não!
Mas toda nova functiona necessária, deve ser escrita em gulp-functions.

- gulp-paths

Array com todos os caminhos necessários para compilação: src, assets, js, css, sass e images.
Em module.exports foi definido theme e dentro deste tem a primeira configuração e única neste caso!
```
theme: {
    main: {
      scss: {
        src: `${paths.src}/${paths.scss}/main.scss`,
        dist: `${paths.dist}/${paths.css}`,
        filename: 'main.css' 
      }
    }
},
```

Caso tenha necessidade de compilar SASS e gerar arquivos especificos/separados do main.css, deve colocar uma virgula na chave que fecha o main como no exemplo a seguir:
```
theme: {
    main: {
      scss: {
        src: `${paths.src}/${paths.scss}/main.scss`,
        dist: `${paths.dist}/${paths.css}`,
        filename: 'main.css' 
      }
    },
    other:{
        scss: {
        src: `${paths.src}/${paths.scss}/main.scss`,
        dist: `${paths.dist}/${paths.css}`,
        filename: 'other.css' 
      }
    }
},
```

- gulp-plugins

Contém referência de todas os plugins instalados.

- gulpfile

Com apenas um(1) task para compilar o css.
**"scss-to-css"** - ela busca dentro de _gulp-paths_ cada configuração existente dentro de theme, compila e gera um arquivo css com o nome definido no filename.


### packge.json

Criado três definições para compilar.

* whatch: fica assistindo/verificando se teve alteração e caso seja positivo, já compila.

* dev: compila e gera arquivos com sourcemap true

* prod: compila e gera arquivos minificado


OBSERVAÇÕES: para registro...

Para executar, estou abrindo o git-bash, navegando até a raiz do projeto e executando um dos scripts acima! 

Para manter o sourcemap e conseguir inspecionar elemento normalmente executo **npm run dev**




[Bruno Silva](https://www.linkedin.com/in/bruno-silva0109/)