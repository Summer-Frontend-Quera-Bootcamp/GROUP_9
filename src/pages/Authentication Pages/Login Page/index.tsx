// <======== Code-Files ========> //
import '../../../index.css';

// <======== Component-Files ========> //
import AuthenticationLayout from '../Layout';
import AuthenticationForm from '../../../components/Form';

// <======== Hook ========> //
import { z } from 'zod';


const LogInPage = () => {
    return (
    <AuthenticationLayout linkTextContent='ثبت‌نام نکرده‌ای؟' buttonTextContent='ثبت‌نام'>
        <AuthenticationForm 
          title = 'به کوئرا تسک‌منیجر خوش برگشتی :)'
          buttonTextContent = 'ورود' 
          forgetPageLink
          signupPageLink
          items={[
            {
              type:'email',
              name:'email',
              label:'ایمیل'
            },
            {
              type:'password',
              name:'password',
              label:'رمزعبور'
            }]} 
          schema = {
            z.object({
              email: z.string().email("ایمیل وارد شده صحیح نمی‌باشد!"),
              password: z.string().min(8, "رمزعبور نباید کمتر از 8 کاراکتر باشد!")
                .refine(password => /[A-Z]/.test(password), "رمزعبور باید شامل حداقل یک حرف بزرگ باشد.")
                .refine(password => /\d/.test(password), "رمزعبور باید شامل حداقل یک عدد باشد.")
            })
          }
        />
    </AuthenticationLayout>
    )
}

export default LogInPage