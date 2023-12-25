export function Contact () {
  return (

    <section class='contact' id='contact'>

      <div class='heading'>
        <h2><span>Contact</span> Me</h2>
      </div>

      <div class='box-container'>

        <div class='contact-info'>

          <h3>Get in Touch</h3>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div class='info-item'>
            <h4>Phone:</h4>
            <div class='detail'>
              <div class='fas fa-phone' />
              <p>+123-456-789</p>
            </div>
            <div class='detail'>
              <div class='fas fa-phone' />
              <p>+111-222-333</p>
            </div>
          </div>

          <div class='info-item'>
            <h4>email:</h4>
            <div class='detail'>
              <div class='fas fa-envelope' />
              <p class='gmail'>abc@gmail.com</p>
            </div>
            <div class='detail'>
              <div class='fas fa-envelope' />
              <p class='gmail'>xyz@gmail.com</p>
            </div>
          </div>

          <div class='info-item'>
            <h4>linkedin:</h4>
            <div class='detail'>
              <div class='fab fa-linkedin' />
              <p class='linkedin'>https://www.linkedin.com/</p>
            </div>
          </div>

        </div>

        <form method='post' class='contact-form' id='contactUs-Form'>

          <input type='text' name='name' class='box' id='name' placeholder='name' required />
          <input type='email' name='email' class='box' id='email' placeholder='email' required />
          <input type='text' name='subject' class='box' id='subject' placeholder='subject' required />
          <textarea cols='30' rows='10' name='comment' id='comment' class='box' placeholder='message' />
          <button type='submit' class='btn' name='submit' id='submit'>Send Message</button>

          <span class='alert' id='msg' />

        </form>

      </div>

    </section>
  )
}
