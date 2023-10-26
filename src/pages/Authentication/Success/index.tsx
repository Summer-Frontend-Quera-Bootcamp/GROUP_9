// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Authentication from "../../../layouts/Authentication";
import AuthenticationForm from "../../../components/Athentication/Form";

// <======== Hooks ========> //


const Success: React.FC = (): JSX.Element => {
  return (
    <Authentication page="success">
      <AuthenticationForm title="فراموشی رمز عبور" page="success">
        <>
          <p className="w-full mt-[29px] font-IranYekan400 text-BodyS text-center">
            لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی
            کنید.
          </p>
        </>
      </AuthenticationForm>
    </Authentication>
  );
};

export default Success;
