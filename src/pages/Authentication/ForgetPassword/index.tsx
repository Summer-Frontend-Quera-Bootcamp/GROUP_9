// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Authentication from "../../../layouts/Authentication";
import AuthenticationForm from "../../../components/Athentication/Form";

// <======== Hooks ========> //


const ForgetPassword = () => {
  return (
    <Authentication page="forgetpassword">
      <AuthenticationForm
        title="فراموشی رمز عبور"
        page="forgetpassword"
        inputItems={[
          {
            type: "email",
            name: "email",
            label: "ایمیل خود را وارد کنید",
          },
        ]}
      >
        <button className="w-full h-[48px] p-[10px] mt-[20px] rounded-[6px] bg-Brand-Primary font-IranYekan800 text-BoldS text-White flex justify-center items-center">
          دریافت ایمیل بازیابی رمز عبور
        </button>
      </AuthenticationForm>
    </Authentication>
  );
};

export default ForgetPassword;
