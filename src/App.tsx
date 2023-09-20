import './index.css'; 
import Background from './pages/Authentication Pages/Layout'
import Form_base from './components/form/form';
import Btn from './components/common/button/button';
import { z, ZodSchema } from 'zod';
function App() {

  return (
    <Background text='قبلا ثبت‌ نام کرده‌ای؟' btn='ورود'>
    <Form_base signup forget btn_text='ثبت نام' contranct items={[{type:'text',name:'name',label:'نام'},{type:'password',name:'pass',label:'فامیلی'},{type:'email',name:'email',label:'ایمیل'}]} schema={z.object({
      name:z.string().min(3,{message:"حداقل تعداد کاراکتر3 تا میباشد"}),
      pass:z.string().min(8, "Password should be at least 8 characters")
      .refine(password => /[A-Z]/.test(password), "Password should have at least one uppercase letter")
      .refine(password => /\d/.test(password), "Password should have at least one number"),
      email:z.string().email()
    })
    } title='به کوئرا تسک منیجر خوش برگشتی :) '/>

    </Background>
  
  )
}

export default App
