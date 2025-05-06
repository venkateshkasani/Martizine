import emailjs from "@emailjs/browser";

const sendMail = async ({name,message}:{name:string,message:string}) => {
    try {
        console.log("mail sending triggered")
        await emailjs.send("service_k9vrc7d","template_nfzeagp",{ name, message },'pPCSPQGletGFKjBHY');
        console.log("mail sent")
    } catch (e) {
        console.log("Error while sending mail",e)
    }
}
export default sendMail;