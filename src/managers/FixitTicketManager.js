import { send, init } from 'emailjs-com';

let userID = "user_5K1NdPEPu4k2hjMdKf6cz";
let serviceID = "default_service";
let templateID = "fixit_ticket";
let templateParams = {};

export function initEmailJS() {
  init(userID);
  console.log("Initialized email-js.")
}

export function sendTicket(ticket) {
  console.log('sending ticket');
  templateParams["fixit_ticket"] = ticket;
  send(serviceID, templateID, templateParams);
}
