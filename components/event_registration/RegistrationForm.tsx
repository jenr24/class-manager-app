import { NextPage } from "next";
import React, { useState } from "react";
import RequiredTextInput from "./RequiredTextInput"
import { match, none, Option, some } from "fp-ts/Option"
import { pipe } from "fp-ts/lib/function";
import { string } from "fp-ts";
import { BiCheck } from "react-icons/bi"

type RegistrationFormProps = {
  event_name: string;
  event_location: string;
  event_date: string;
  user_dashboard_link: Option<string>;
};

type RegistrationFormInputs = {
  first_name: string;
  last_name: string;
  ssn: string;
}

type UserRegistrationResponse = {
  success: boolean;
  name: string;
  user_dashboard_link: Option<string>;
}

const RegistrationForm: NextPage<RegistrationFormProps> = 
  ({event_name, event_location, event_date, user_dashboard_link}: RegistrationFormProps) => {
    const none_str: Option<string> = none;
    const [hasRegistered, setHasRegistered] = useState(false)
    const [userDashBoardLink, setUserDashboardLink] = useState(none_str)
    const [userName, setUserName] = useState(none_str)

    const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const target = event.target as typeof event.target & RegistrationFormInputs;
      const fetch_options = {
        method: 'POST',
        body: JSON.stringify(target),
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const res: UserRegistrationResponse = await fetch(`localhost/api/register_user/`, fetch_options)
        .then(res => res.json())
        .then(res => res as typeof res & UserRegistrationResponse)

      var dashboard_link = ""
      const name = some(res.name);
      if (res.success && pipe(user_dashboard_link, match(() => false, (link) => {dashboard_link = link; return true}))) {
        setHasRegistered(true)
        setUserDashboardLink(some(dashboard_link))
        setUserName(name)
      }
    }

    return (
      <>
      {(hasRegistered || <div>
        <h1>Register for { event_name }, {event_date} </h1>
        <form onSubmit={registerUser}>
          <RequiredTextInput 
            required
            label=""
            placeholder="First Name" 
            autoComplete="first name" 
            id="first_name" 
          />
          <RequiredTextInput
            required
            label=""
            placeholder="Last Name"
            autoComplete="last name"
            id="last_name" 
          />
          <RequiredTextInput 
            required
            label=""
            placeholder="Social Security Number"
            autoComplete="ssn"
            id="ssn"
          />
          <button type="submit">
            <BiCheck />
            Register
          </button>
        </form>
      </div>)}

      {(hasRegistered && <div>
        <h1> {"Thanks for Registering," + (pipe(userName, match(() => "User", (name) => (", " + name)))) + "!" }</h1>
        <p>
          {pipe(userDashBoardLink, match(
            () => <span>"we hope to see you there"</span>, 
            (link) => <span> 
              click 
              <a href={link}> here </a> 
              to see more about the upcoming event 
            </span> 
          ))} 
        </p>
      </div>)}
      </>
    )
  }

export default RegistrationForm;