import * as React from 'react';
import { useForm } from "react-hook-form";
import emailjs, { init } from 'emailjs-com';

import PageLayout from "../templates/Page"
import { useState } from "react"
import { graphql } from "gatsby"
import { data } from "autoprefixer"

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  descriptions: string;
}

enum EmailEvent {
  UNSET,
  SUCCESS,
  FAILURE
}

interface ContactPagePropType {
  data: {
    site : {
      siteMetadata: any
    }
  }
}

const ContactPage: React.FC<ContactPagePropType> = ({data}) => {
  const siteMetadata = data.site.siteMetadata;

  const {register, reset, handleSubmit, formState: {errors}} = useForm<FormData>();
  const [emailSentMessage, setEmailSentMessage] = useState<EmailEvent>(EmailEvent.UNSET);

  const onSubmit = handleSubmit( data => {
    const templatesParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      message: data.descriptions
    }
    emailjs.send(process.env.GATSBY_EMAIL_JS_SERVICE_ID || '', process.env.GATSBY_EMAIL_JS_TEMPLATE_ID || '', templatesParams, process.env.GATSBY_EMAIL_JS_CLIENT_ID || '')
      .then(() => {
        reset();
        setEmailSentMessage(EmailEvent.SUCCESS);
        setTimeout(() => {
          setEmailSentMessage(EmailEvent.UNSET);
        }, 5000)
      }).catch(e => {
        console.log(e);
      setEmailSentMessage(EmailEvent.FAILURE);
      setTimeout(() => {
        setEmailSentMessage(EmailEvent.UNSET);
      }, 5000)
    });
  })

  return (
    <PageLayout siteTitle={'contact'} data={data}>
      <div className="half-container-animation">
        <div className="half-container animation-container card block">
          <div className='about-title main-name-title main-title'>
            <h1>Contact me</h1>
          </div>
          <div className="mt-4 contact-contain">
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-2">
                <div className="col-span-2 md:col-span-1 m-2">
                  <label className="block text-sm font-medium">First Name</label>
                  <input className="w-full mt-2" {...register("firstName", {required: true})}/>
                  {errors.firstName?.type === 'required' && <p className="error">* First name is required</p>}
                </div>
                <div className="col-span-2 md:col-span-1 m-2">
                  <label className="block text-sm font-medium">Last Name</label>
                  <input className="w-full mt-2" {...register("lastName", {required: true})}/>
                  {errors.lastName?.type === 'required' && <p className="error">* Last name is required</p>}
                </div>
              </div>
              <div className="m-2">
                <label className="block text-sm font-medium">Email</label>
                <input className="w-full mt-2" {...register("email", {required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}/>
                {errors.email?.type === 'required' && <p className="error">* Email is required</p>}
                {errors.email?.type === 'pattern' && <p className="error">* Please enter valid email</p>}
              </div>
              <div className="m-2 mt-4">
                <label className="block text-sm font-medium">Message</label>
                <textarea rows={4} className="w-full mt-2" {...register("descriptions", {required: true} )}/>
                {errors.descriptions?.type === 'required' && <p className="error">* Description is required</p>}
              </div>
              <div className="flex justify-end m-2">
                <button className="submit-button box-shadow" type="submit">Submit</button>
              </div>
            </form>
            {emailSentMessage === EmailEvent.SUCCESS && <div className="alert success">
              <h4>Email sent Successfully!</h4>
            </div>}
            {emailSentMessage === EmailEvent.FAILURE && <div className="alert error">
              <h4>Something went Wrong!! Couldn't Send Email!</h4>
            </div>}
            <div>
              <h2 className="text-2xl my-4">Or Connect me On....</h2>
              <ul>
                <li className="my-2">Email : <a className="hover:underline" href={'mailto:' + siteMetadata.email} target="_blank">{siteMetadata.email}</a></li>
                <li className="my-2">Github : <a className="hover:underline" href={siteMetadata.github} target="_blank">Link</a></li>
                <li className="my-2">Linkedin : <a  className="hover:underline"href={siteMetadata.linkedin} target="_blank">Link</a></li>
                <li className="my-2">Twitter : <a className="hover:underline" href={siteMetadata.twitter} target="_blank">Link</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export const query = graphql`
    query {
        site {
            siteMetadata{
                email
                linkedin
                twitter
                github
            }
        }
    }
`


export default ContactPage;
