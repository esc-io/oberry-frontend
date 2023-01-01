import React from "react";

import { AppLayout } from "layouts";

import { useRoute } from "@react-navigation/native";

import {
  Introduction,
  SelfCertification,
  AccountCreationForm,
} from "widgets/SignUp/AccountCreation";

function SignUp() {
  const {
    params: { step },
  } = useRoute();

  return (
    <AppLayout>
      {step === 0 && <Introduction />}
      {step === 1 && <SelfCertification />}
      {step === 2 && <AccountCreationForm />}
    </AppLayout>
  );
}

export default SignUp;
