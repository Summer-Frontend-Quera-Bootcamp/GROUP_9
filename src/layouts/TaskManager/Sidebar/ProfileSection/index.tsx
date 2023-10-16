const ProfileSection: React.FC = (): JSX.Element => {
    return(
        <div className="flex flex-row items-center gap-xs">
          <div className="w-[36px] h-[36px] bg-Indigo-Secondary rounded-full font-IranYekan400 text-BodyXS text-Indigo-Primary flex justify-center items-center">
            NM
          </div>
          <h2 className="font-IranYekan500 text-BodyM">
            نیلوفر موجودی
          </h2>
        </div>
    )
}

export default ProfileSection;