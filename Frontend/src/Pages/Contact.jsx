import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a techincal issue ? Want to send feedback about a beta feature ?
          Let us know.
        </p>
        <form action="" className="space-y-8">
          <div>
            <label htmlFor="email" className="form_label">
              {" "}
              Your email
            </label>
            <input
              type="email"
              placeholder="Example@gmail.com"
              className="form_input mt-1"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="Subject" className="form_label">
              {" "}
             Subject
            </label>
            <input
              type="text"
              placeholder="Let us know how we can help you"
              className="form_input mt-1"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="form_label">
              {" "}
             Your message
            </label>
            <textarea
            rows="6"
              type="text"
              placeholder="Leave a comment"
              className="form_input mt-1"
            />
          </div>

          <button type="submit" className="btn rounded sm:w-fit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
