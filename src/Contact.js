import Hero from "./Hero";

function Contact() {
  return (
    <>
      <Hero
        text="Contact us"
        backdrop="https://images.unsplash.com/photo-1509564324749-471bd272e1ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        height="8rem"
      />
      <div className="container py-5 d-flex justify-content-center">
          <form className="d-flex flex-column gap-4" action="mailto:youremail@example.com" method="post" style={{width: 'min(100%, 40rem)'}}>
            <input className="bg-transparent border border-2 rounded-2 text-light" type="text" name="email" placeholder="Your email address" />
            <input className="bg-transparent border border-2 rounded-2 text-light" type="text" name="subject" placeholder="Subject" />
            <textarea className="bg-transparent border border-2 rounded-2 text-light" name="content" cols="30" rows="5" placeholder="Your message"></textarea>
            <button className="btn btn-light w-25" type="submit" value="Send">Send</button>
          </form>
      </div>
    </>
  );
}

export default Contact;
