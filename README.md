<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<h3 align="center">Find Your Hat Node.js Game</h3>

  <p align="center">
    Codecademy Full Stack Engineer path - Challenge Project
    <br />
    <a href="https://github.com/mattsteen14/ca-findyourhat"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/mattsteen14/ca-findyourhat">View Demo</a>
    ·
    <a href="https://github.com/mattsteen14/ca-findyourhat/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/mattsteen14/ca-findyourhat/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


### Codecademy Project Brief

"In this project, you’ll be building an interactive terminal game. The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field.

1. In order to start this project, you should have completed lessons at least through Classes in our Introduction to JavaScript curriculum.

In this project, you’ll be building an interactive terminal game with JavaScript classes. Because the goal involves user input, make sure you read our guide on working with user input in Node.js. If you complete this project on our platform, you can test and run your code with the command node main.js in our terminal.

2. Your project is centered on a Field class. This and the following tasks will describe how the class should function at a high level, and it will be up to you to figure out the implementation in code. As you go, test your code by creating instances of the class and calling its methods.

The Field constructor should take a two-dimensional array representing the “field” itself. A field consists of a grid containing “holes” (O) and one “hat” (^). We use a neutral background character (░) to indicate the rest of the field itself. The player will begin in the upper-left of the field, and the player’s path is represented by *.

  ```js
  *░O
  ░O░
  ░^░
  ```


Your class should take a single argument representing the field:
  ```js
  const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
  ]);
  ```

3. Give your Field class a .print() method that prints the current state of the field. You can choose to format this however you want, but it will be much easier to play the game if you print out a string representation of the board instead of the raw array.

4. Your game should be playable by users. In order to facilitate this, build out the following behavior:

When a user runs main.js, they should be prompted for input and be able to indicate which direction they’d like to “move”.
After entering an instruction, the user should see a printed result of their current field map with the tiles they have visited marked with *. They should be prompted for their next move.
This should continue until the user either:

Wins by finding their hat.
Loses by landing on (and falling in) a hole.
Attempts to move “outside” the field.
When any of the above occur, let the user know and end the game.

5. Add a .generateField() method to your Field class. This doesn’t need to be tied to a particular instance, so make it a static method of the class itself.

This method should at least take arguments for height and width of the field, and it should return a randomized two-dimensional array representing the field with a hat and one or more holes. In our solution, we added a third percentage argument used to determine what percent of the field should be covered in holes."

### My Comments

This was such a fun project. I don't do this very often with the Codecademy challenge/portfolio projects but I found myself getting sidetracked and playing around before I had completed all of the basic tasks. As I was working on task 4 I ended up adding functionality to the resetField helper so that the player can customise their field if they choose to play again. At one point I started playing with randomly generating the field. As I was looking at the task 7 extension tasks, I saw the 'create a hard mode' bullet point and that lead to me implementing a prompt for the player to choose their difficulty level. I will definitely have a go at the task 7 extension tasks. I've put them in my read me <a href="#roadmap">roadmap section</a>. Through playing the game myself I definitely think that the field validator would be much needed. Often it generates fields that are impossible to play as it puts loads of holes around the hat, especially in the harder difficulties. So I need to sort that out. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

- JavaScript
- [Express.js](http://expressjs.com/)
- [Node.js](https://nodejs.org/en)
- [Visual Studio Code](https://code.visualstudio.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

These are instructions on setting up the project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

<!-- 1. Get a free API Key at [https://example.com](https://example.com) -->
1. Clone the repo
   ```sh
   git clone https://github.com/mattsteen14/ca-findyourhat.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

3. Call the program in node to play the game
   ```sh
   node main.js
   ```

4. Follow the command prompts

5. To exit game if needed
   ```sh
   ctrl+C
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Have the character start on a random location that’s not the upper-left corner.
- [ ] Create a “hard mode” where one or more holes are added after certain turns.
- [ ] Improve your game’s graphics and interactivity in the terminal.
- [ ] Create a field validator to ensure that the field generated by Field.generateField() can actually be solved.
- [ ] Testing & Debugging.
- [ ] Use surge to deploy.

See the [open issues](https://github.com/mattsteen14/ca-findyourhat/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Matt Steen-Brookes - [@mattsteen14](https://twitter.com/mattsteen14) - mattsteen14@me.com

Project Link: [https://github.com/mattsteen14/ca-findyourhat](https://github.com/mattsteen14/ca-findyourhat)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Mo Ashqar](https://github.com/ashqar) for introducing me to Codecademy in the first place. 
* [Othneil Drew](https://github.com/othneildrew) for the README template.
* [Choose an Open Source License](https://choosealicense.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/mattsteen14/ca-findyourhat.svg?style=for-the-badge
[contributors-url]: https://github.com/mattsteen14/ca-findyourhat/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mattsteen14/ca-findyourhat.svg?style=for-the-badge
[forks-url]: https://github.com/mattsteen14/ca-findyourhat/network/members
[stars-shield]: https://img.shields.io/github/stars/mattsteen14/ca-findyourhat.svg?style=for-the-badge
[stars-url]: https://github.com/mattsteen14/ca-findyourhat/stargazers
[issues-shield]: https://img.shields.io/github/issues/mattsteen14/ca-findyourhat.svg?style=for-the-badge
[issues-url]: https://github.com/mattsteen14/ca-findyourhat/issues
[license-shield]: https://img.shields.io/github/license/mattsteen14/ca-findyourhat.svg?style=for-the-badge
[license-url]: https://github.com/mattsteen14/ca-findyourhat/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mattsteen14
[product-screenshot]: /portfolio/resources/images/PortfolioScreenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
