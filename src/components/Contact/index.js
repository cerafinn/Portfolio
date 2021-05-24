import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import M from 'materialize-css';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(e) {
    if (e.target.name ==='email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('Your email is not valid');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Error: ${e.target.name} is required.`);
        console.log('errorMessage', errorMessage);
      } else {
        setErrorMessage('');
      }
    }


    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }
  };

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formState);
  // }


  //update this with your js_form selector
  const form_id_js = "contact-form";

  const data_js = {
    "access_token": "3m393vxrag6z0flqocnfhsso"
  };

  function js_onSuccess() {
    console.log("success");
    M.toast({
      html: "Success!",
      classes: "rounded"
    })
  }

  function js_onError(error) {
    console.log(error);
    M.toast({
      html: "Please retry",
      classes: "rounded"
    });
  }

  const sendButton = document.getElementById("js_send");

  function jsSend(e) {
    e.preventDefault();
    sendButton.value='Sending…';
    sendButton.disabled=true;
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        js_onSuccess();
      } else
        if(request.readyState == 4) {
          js_onError(request.response);
        }
    };

    const subject = "Contact from Portfolio";
    const name = document.querySelector("#" + form_id_js + " [name='name']").value;
    const email = document.querySelector("#" + form_id_js + " [name='email']").value;
    const message = document.querySelector("#" + form_id_js + " [name='message']").value;
    data_js['subject'] = subject;
    data_js['name'] = name;
    data_js['email'] = email;
    data_js['text'] = message;
    const params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);

    return false;
  }

  function toParams(data_js) {
    let form_data = [];
    for ( const key in data_js ) {
      form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
  }

  // const js_form = document.getElementById(form_id_js);
  // js_form.addEventListener("submit", function (e) {
  //   e.preventDefault();
  // });


  return (
    <section>
      <h1>reach out;;</h1>
      <div className="content">
        <form id="contact-form" onSubmit={jsSend}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" defaultValue={name} onChange={handleChange} name="name" />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input type="email" onChange={handleChange} name="email" defaultValue={email} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea type="message" onChange={handleChange} name="message" defaultValue={message} rows="5" />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text ">{errorMessage}</p>
            </div>
          )}
          <button type="submit" data-testid="submit" id="js_send" value="Send" className="btn btn-secondary btn-lg">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;