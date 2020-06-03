# Bruno Silva - Coding Testimonials Slider

Projeto de inspiração é do [https://www.frontendmentor.io/]


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



<!-- 
**To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this testimonial slider and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to: 

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design to work to. 

The designs are in JPG static format. This will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. This should help train your eye to perceive differences in spacings and sizes.

If you would like the Sketch file in order to inspect the design in more detail it is available to buy from the challenge page on the platform.

You will find all the required assets in the `/images` folder. The assets are already optimized.

There is also a `style-guide.md` file, which contains the information you'll need, such as color palette and fonts.

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). This will make it easier to share your code with the community if you need some help. If you're not sure how to do this, [have a read through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a URL. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, but we recommend using [Vercel](https://bit.ly/fem-vercel). We've got more information about deploying your project with Vercel below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes that you could create to make reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.
7. If you'd like to try making your project fully responsive, we'd recommend checking out [Sizzy](https://bit.ly/fm-sizzy). It's a great browser that makes it easy to view your site across multiple devices.

## Deploying your project

As mentioned above, there are a number of ways to host your project for free. We recommend using [Vercel](https://bit.ly/fem-vercel) as it's an amazing service and extremely simple to get set up with. If you'd like to use Vercel, here are some steps to follow to get started:

1. [Sign up to Vercel](https://bit.ly/fem-vercel-signup) and go through the onboarding flow, ensuring your GitHub account is connected by using their [Vercel for GitHub](https://vercel.com/docs/v2/git-integrations/vercel-for-github) integration.
2. Connect your project to Vercel from the ["Import project" page](https://vercel.com/import), using the "From Git Repository" button and selecting the project you want to deploy.
3. Once connected, every time you `git push`, Vercel will create a new [deployment](https://vercel.com/docs/v2/platform/deployments) and the deployment URL will be shown on your [Dashboard](https://vercel.com/dashboard). You will also receive an email for each deployment with the URL.

## Sharing your solution

There are multiple places you can share your solution:

1. Submit it on the platform so that other users will see your solution on the site. Here's our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) to help you do that.
2. Share your solution page in the **#finished-projects** channel of the [Slack community](https://www.frontendmentor.io/slack).
3. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor** including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.

## Giving feedback

Feedback is always welcome, so if you have any to give on this challenge please email hi[at]frontendmentor[dot]io.

This challenge is completely free. Please share it with anyone who will find it useful for practice.

**Have fun building!** 🚀

## Community Sponsors

A massive thank you to our community sponsors!

- [Vercel](https://bit.ly/fem-vercel) offers an amazing website hosting service, which is super simple to set up. Just connect your GitHub account, point to a repo and your site will be deployed. Perfect for your website and frontend hosting needs - especially since it's free to get started!
- [Sizzy](https://bit.ly/fm-sizzy) is an extremely useful browser designed specifically to improve a developer's workflow when building websites. You can fire up multiple device emulators and run them all in sync while building out your web pages. Perfect for helping build fully responsive websites!
- [Dracula PRO](https://bit.ly/fem-dracula) is a beautiful dark theme to help keep you focused and productive while you code. The theme isn't just for your editor either. You can also apply it to your most-used apps like your terminal and even Slack! -->
