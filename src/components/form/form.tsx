import '../../index.css'; 
import './index.css'
import { z, ZodSchema } from 'zod';
import Input from '../common/input/input';
import Btn from '../common/button/button';
import {useForm} from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'

interface Iitems{
    label:string;
    type:string;
    name:string;
    
}

interface Iform{
    title:string;
    items:Iitems[];
    schema:ZodSchema<any>;
    contranct?:boolean;
    btn_text:string;
    forget?:boolean;
    signup?:boolean;
}

const Form_base:React.FC<Iform>=({title,items,schema,contranct=false,btn_text,forget=false,signup=false}):JSX.Element=>{

    const schema_ = schema;
    type Form_data = z.infer<typeof schema_>

    const {register , handleSubmit,formState:{errors},} = useForm<Form_data>({resolver:zodResolver(schema_)})

    const form_generator = items.map(item=>{
        return(
            <Input type={item.type} key={item.name} errors={errors} hook={register} name_={item.name} text={item.label}></Input>
        
        )
    })


    return (
        <div dir='rtl' className='shadow  w-[640px] h-[auto] z-50 absolute top-[200px] left-[50%] translate-x-[-50%] rounded-[20px] p-[24px] bg-white flex flex-col items-center justify-center'>
           <h1 className='font-extrabold w-full text-[32px] text-center leading-[55.27px]'>{title}</h1>
           <form onSubmit={handleSubmit(data=>console.log(data))} className='flex flex-col space-y-[10px] w-[592px]'>
           {form_generator}
           {forget && (
            <a className='w-full text-right font-extrabold text-[12px] leading-[27.64px] font-family:IranYekan text-blue-primary mt-[-20px]' href="#">رمز عبور را فراموش کرده ایی؟</a>
           )}
           {contranct && (
                   <div className='flex flex-row h-auto'>
                   <input dir='rtl' type='checkbox' name='contract' id='contract' className='w-[20px] h-[20px] rounded-md bg-white border border-br text-br p-[5px] ml-[6px]'/>
                   <label htmlFor='contract' className='font-normal font-[14px] text-right leading-[24.18px] font-family:IranYekan '>قوانین و مقررات را میپذیرم.</label>
                   </div>
           )}

           <Btn text={btn_text}></Btn>
           {signup && (
            <p className='w-full text-center font-normal text-[16px] leading-[27.64px] font-family:IranYekan'>ثبت نام نکرده ایی؟ <span><a href="#" className='text-blue-primary'>ثبت نام</a></span></p>
           )}
           </form>
        </div>
    )
}

export default Form_base