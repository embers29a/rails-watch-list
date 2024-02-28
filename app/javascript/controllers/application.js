// app/javascript/application.js
import "bootstrap"
import "@popperjs/core"



import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
