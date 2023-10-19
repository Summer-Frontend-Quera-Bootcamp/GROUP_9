// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Authentication from "../../../layouts/Authentication";
import AuthenticationForm from "../../../components/Athentication/Form";

// <======== Hooks ========> //


const Register = () => {
  return (
    <Authentication page="register">
      <AuthenticationForm 
        title="ثبت‌نام در کوئرا تسک‌منیجر" 
        page="register"
        inputItems={[
          {
            type: "text",
            name: "fullName",
            label: "نام کامل"
          },
          {
            type: "text",
            name: "userName",
            label: "نام کاربری"
          },
          {
            type: "password",
            name: "password",
            label: "رمز عبور"
          }
        ]} 
      >
        <>
          <div className="mt-[20px] flex justify-start items-center gap-xs">
            <input type="checkbox" name="contract" id="contract" className="w-[20px] h-[20px] rounded-[4px] border border-[#999] cursor-pointer"/>
            <label htmlFor="contract" className="font-IranYekan500 font-BodyM text-right cursor-pointer">
              قوانین و مقررات را می‌پذیرم.
            </label>
          </div>
          <button className="w-full h-[48px] p-[10px] mt-[20px] rounded-[6px] bg-Brand-Primary font-IranYekan800 text-BoldS text-White flex justify-center items-center">
            ثبت‌نام
          </button>
        </>
      </AuthenticationForm>
    </Authentication>
  )
}

export default Register;