// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Authentication from "../../../layouts/Authentication";
import AuthenticationForm from "../../../components/Athentication/Form";

// <======== Hooks ========> //


const ResetPassword = () => {
  return (
    <Authentication page="resetpassword">
      <AuthenticationForm 
        title="بازیابی رمز عبور" 
        page="resetpassword"
        inputItems={[
          {
            type: "password",
            name: "password",
            label: "رمز عبور جدید را وارد کنید"
          }
        ]}
      >
        <button className="w-full h-[48px] p-[10px] mt-[20px] rounded-[6px] bg-Brand-Primary font-IranYekan800 text-BoldS text-White flex justify-center items-center">
          تغییر رمز عبور
        </button>
      </AuthenticationForm>
    </Authentication>
  )
}

export default ResetPassword;