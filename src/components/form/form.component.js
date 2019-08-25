import React from "react"
import { navigate } from "gatsby-link"
import CustomAnimatedButton from "../button/animated-button"
import "./form.styles.scss"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <div>
        <form
          name="contact"
          method="post"
          action="/ThankYou/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <div className="form-grid">
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>

            <input
              className="name-input"
              type={"text"}
              name={"name"}
              onChange={this.handleChange}
              id={"name"}
              required={true}
              placeholder={"Your name"}
            />

            <input
              className="email-input"
              type={"email"}
              name={"email"}
              onChange={this.handleChange}
              id={"email"}
              required={true}
              placeholder={"Your e-mail"}
            />

            <textarea
              className="messege-input"
              name={"message"}
              onChange={this.handleChange}
              id={"message"}
              required={true}
              placeholder={"Message"}
              style={{
                width: "100%",
                height: "150px",
              }}
            />

            <CustomAnimatedButton className="form-button" type="submit">
              Send
            </CustomAnimatedButton>
          </div>
        </form>
      </div>
    )
  }
}
