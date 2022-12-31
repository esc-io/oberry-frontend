import React from "react";

import { AppLayout } from "layouts";

import {
  Introduction,
  SelfCertification,
} from "widgets/SignUp/AccountCreation";

function SignUp() {
  return (
    <AppLayout>
      {/* <Introduction /> */}
      <SelfCertification />
    </AppLayout>
  );
}

export default SignUp;
