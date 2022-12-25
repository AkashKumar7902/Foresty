import React from 'react'
import { Input, Textarea, Button } from '@chakra-ui/react'

const ContactUs = () => {
    return (
        <div>
            <div className='pt-20 px-10 flex font-extrabold text-2xl'>
                ContactUs
            </div>
            <div className='flex center'>
                <form action="https://formsubmit.co/navinchandra772@gmail.com" method="POST">
                    {/* <input className='bg-green-200'
                        type="text" name="name" required /> */}
                    <div className='px-5 py-5 font-bold'>
                        Name
                        <Input
                            placeholder='Full Name' type="text" name="name" />
                    </div>
                    <div className='px-5 py-10 font-bold'>
                        Email
                        <Input
                            placeholder='Email' type="email" name="email" />
                    </div>
                    {/* <input type="email" name="email" required /> */}
                    <div className='px-5 py-5 font-bold'>
                        Message
                        <Textarea name="message" placeholder="Details of your problem"></Textarea>
                    </div>
                    <div className='px-5 py-5'>
                        *Attach file if required
                        <input className='px-5' type="file" name="attachment" accept="image/png, image/jpeg"></input>
                    </div>
                    <div className='px-5 py-5'>
                        <Button className='px-5' colorScheme='blue' type="submit">Send</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs