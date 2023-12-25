export function About () {
  return (
    <section class='about' id='about'>

      <div class='box-container'>

        <div class='image'>
          <img src='assets/images/About/About-Image.png' alt='About-Image' />
        </div>

        <div class='content'>

          <h2>My name is Dante.</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae aut adipisci necessitatibus veniam, provident
            vero architecto praesentium, non sequi libero corrupti molestias.
            Architecto voluptate eligendi maiores, error magni accusamus officia.
          </p>

          <div class='about-info'>

            <div class='info'>
              <h4>age: <span>36</span></h4>
              <h4>gender: <span>Male</span></h4>
              <h4>language: <span>spanish, english</span></h4>
              <h4>work: <span>Front-End developer</span></h4>
              <h4>freelance: <span>available</span></h4>
              <a href='#' class='btn'>download CV <i class='fas fa-download' /></a>
            </div>

            <div class='counting'>

              <div class='box'>
                <h1 class='count' data-count='4'>4+</h1>
                <h3>years of experience</h3>
              </div>

              <div class='box'>
                <h1 class='count' data-count='100'>100+</h1>
                <h3>projects completed</h3>
              </div>

              <div class='box'>
                <h1 class='count' data-count='80'>80+</h1>
                <h3>happy clients</h3>
              </div>

              <div class='box'>
                <h1 class='count' data-count='20'>20+</h1>
                <h3>awards won</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
