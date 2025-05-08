import emailjs from "@emailjs/browser";

const sendMail = async ({name,message}:{name:string,message:string}) => {
    try {
        console.log("mail sending triggered")
        //service id, template id , secret code
        await emailjs.send(process.env.NEXT_PUBLIC_EMAIL_SERVICE!,process.env.NEXT_PUBLIC_EMAIL_TEMPLATE!,{ name, message },process.env.NEXT_PUBLIC_EMAIL_SECRET_CUDE);
        console.log("mail sent")
    } catch (e) {
        console.log("Error while sending mail",e)
    }
}
export default sendMail;