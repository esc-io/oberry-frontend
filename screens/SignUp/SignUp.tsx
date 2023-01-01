import React from "react";

import { AppLayout } from "layouts";

import { useRoute } from "@react-navigation/native";

import {
  Introduction,
  SelfCertification,
  AccountCreationForm,
} from "widgets/SignUp/AccountCreation";

import {
  SIGN_UP_INTRODUCTION,
  SIGN_UP_SELF_CERTIFICATION,
  SIGN_UP_ACCOUNT_CREATION_FROM,
} from "constants/signUp";

function SignUp() {
  const {
    params: { step },
  } = useRoute();

  return (
    <AppLayout>
      {step === SIGN_UP_INTRODUCTION && <Introduction />}
      {step === SIGN_UP_SELF_CERTIFICATION && <SelfCertification />}
      {step === SIGN_UP_ACCOUNT_CREATION_FROM && <AccountCreationForm />}
    </AppLayout>
  );
}

export default SignUp;
