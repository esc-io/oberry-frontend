import React from "react";

import { useRoute } from "@react-navigation/native";

import { ListSelect, OneSelect } from "widgets/common";

import {
  Introduction,
  SelfCertification,
  AccountCreationForm,
} from "widgets/signUp/AccountCreation";
import { InformationForm } from "widgets/signUp/BasicInformation";

import {
  SIGN_UP_INTRODUCTION,
  SIGN_UP_SELF_CERTIFICATION,
  SIGN_UP_ACCOUNT_CREATION_FROM,
  SIGN_UP_INFORMATION_FORM,
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
          <OneSelect />
        </>
      )}
    </>
  );
}

export default SignUp;
