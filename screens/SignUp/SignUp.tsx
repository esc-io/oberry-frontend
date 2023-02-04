import React from "react";

import { useRoute } from "@react-navigation/native";

import { ListSelect, OneSelect } from "widgets/common";

import {
  Introduction,
  SelfCertification,
  AccountCreationForm,
} from "widgets/signUp/AccountCreation";
import { InformationForm } from "widgets/signUp/BasicInformation";
import { PhotoRegistration } from "widgets/signUp/ ProfilePicture";

import {
  SIGN_UP_INTRODUCTION,
  SIGN_UP_SELF_CERTIFICATION,
  SIGN_UP_ACCOUNT_CREATION_FROM,
  SIGN_UP_INFORMATION_FORM,
  SIGN_UP_PROFILE_PICTURE,
} from "constants/signUp";

function SignUp() {
  const {
    params: { step },
  } = useRoute();

  return (
    <>
      {step === SIGN_UP_INTRODUCTION && <Introduction />}
      {step === SIGN_UP_SELF_CERTIFICATION && <SelfCertification />}
      {step === SIGN_UP_ACCOUNT_CREATION_FROM && <AccountCreationForm />}
      {step === SIGN_UP_INFORMATION_FORM && (
        <>
          {/* <InformationForm /> */}
          {/* <ListSelect /> */}
          {/* <OneSelect /> */}
        </>
      )}
      {step === SIGN_UP_PROFILE_PICTURE && <PhotoRegistration />}
    </>
  );
}

export default SignUp;
