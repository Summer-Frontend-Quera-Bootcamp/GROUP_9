// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Authentication from "../../../layouts/Authentication";
import AuthenticationForm from "../../../components/Athentication/Form";
import { Link } from "react-router-dom";

// <======== Hooks ========> //


const Success: React.FC = (): JSX.Element => {
  return (
    <Authentication page="success">
      <AuthenticationForm title="فراموشی رمز عبور" page="success">
        <>
          <p className="w-full mt-[29px] font-IranYekan400 text-BodyS text-center">
            لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.
          </p>
          <Link to={"/authentication/resetpassword"} className="w-full">
            <button className="w-full h-[48px] p-[10px] mt-[20px] rounded-[6px] bg-Brand-Primary font-IranYekan800 text-BoldS text-White flex justify-center items-center">
              ادامه
            </button>
          </Link>
        </>
      </AuthenticationForm>
    </Authentication>
  )
}

export default Success;