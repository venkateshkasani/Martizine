import emailjs from "@emailjs/browser";

const sendMail = async ({name,message}:{name:string,message:string}) => {
    try {
        console.log("mail sending triggered")
        const result = await emailjs.send("service_sfb9tox","template_nfzeagp",{ name, message },'pPCSPQGletGFKjBHY');
    } catch (e) {
        console.log("Error while sending mail",e)
    }
}
export default sendMail;