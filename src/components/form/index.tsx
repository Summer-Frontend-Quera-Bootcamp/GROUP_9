// <======== Code-Files ========> //
import '../../index.css'; 

// <======== import Components ========> //
import Input from '../common/Input';
import Button from '../common/Button';
import Link from '../common/LinkButton';

// <======== Hook ========> //
import { ZodType } from 'zod';
import {useForm} from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'


interface InputItems {
    label : string;
    type : string;
    name : string;
}

type FormData = {
    username ?: string;
    password ?: string;
    email ?: string;
}

interface IFormProps {
    isHaveAInput ?: boolean;
    
    title : string;
    sucssesTitleText ?: string;
    
    items : InputItems[];
    schema : ZodType<FormData>;
    
    contranctCheckbox ?: boolean;
    forgetPageLink ?: boolean;
    signupPageLink ?: boolean;
    
    buttonTextContent ?: string;
}

const AuthenticationForm: React.FC<IFormProps> = ({title, items, schema, contranctCheckbox = false, buttonTextContent, forgetPageLink = false, signupPageLink = false, isHaveAInput = true, sucssesTitleText}): JSX.Element => {

    const {register , handleSubmit, formState:{errors}} = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    const formGenerator = items.map(item => {
        return(
            <Input 
                key={item.name} 
                type={item.type} 
                name={item.name} 
                labelText={item.label}
                errors={errors} 
                hook={register} 
            ></Input>
        )
    })

    if (!isHaveAInput) {
        return (
            <section className='w-[640px] p-m rounded-[20px] bg-White flex flex-col items-start z-50 shadow-4xl'>
                <header className='w-full font-IranYekan800 text-HeadingL text-center'>{title}</header>
                <p className='w-full mt-[29px] font-IranYekan400 text-BodyS text-center'>{sucssesTitleText}</p>
            </section>
        )
    } else {
        return (
            <section className='w-[640px] p-m rounded-[20px] bg-White flex flex-col items-start z-50 shadow-4xl'>
                <header className='w-full font-IranYekan800 text-HeadingL text-center'>{title}</header>
                <form 
                    className='w-full mt-[32px] flex flex-col' 
                    onSubmit={handleSubmit(data => console.log(data))}
                >
                    {formGenerator}
                    {forgetPageLink && (
                     <Link href="#" ClassName='text-right font-IranYekan800 text-BoldXS text-Brand-Primary mt-xs'>رمزعبور را فراموش کرده‌ای؟</Link>
                    )}
                    {contranctCheckbox && (
                            <div className='mt-[20px] flex justify-start items-center gap-xs'>
                                <input type='checkbox' name='contract' id='contract' className='w-[20px] h-[20px] rounded-[4px] border border-[#999]'/>
                                <label htmlFor='contract' className='font-IranYekan500 font-BodyM text-right'>قوانین و مقررات را می‌پذیرم.</label>
                            </div>
                    )}
               <Button ClassName='w-full h-[48px] p-[10px] mt-[20px] rounded-[6px] bg-Brand-Primary font-IranYekan800 text-BoldS text-White flex justify-center items-center'>{buttonTextContent}</Button>
               {signupPageLink && (
                <p className='mt-m text-center font-IranYekan500 text-BodyM'>ثبت‌نام نکرده‌ای؟ <span><Link href="#" ClassName='mr-[7px] text-Brand-Primary font-IranYekan800 text-BoldM'>ثبت‌نام</Link></span></p>
               )}
               </form>
            </section>
        )
    }

}

export default AuthenticationForm;