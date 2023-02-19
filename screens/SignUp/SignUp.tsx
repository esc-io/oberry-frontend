import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  AccountCreationForm,
  SignUpIntroduction,
  SelfCertification,
} from "containers/signUp/AccountCreation";
import { InformationForm } from "containers/signUp/BasicInformation";
import { PhotoRegistration } from "containers/signUp/ProfilePicture";
import { Forwarding, SelfIntroduction } from "containers/signUp/Introduction";
import {
  BadgeIntroduction,
  BadgeSelect,
  CertificationRequest,
} from "containers/signUp/Badge";
import { ApplicationCompleted } from "containers/signUp/ApplicationCompleted";

import {
  SIGN_UP_Account_Creation_Form,
  SIGN_UP_Application_Completed,
  SIGN_UP_Badge_Introduction,
  SIGN_UP_Badge_Select,
  SIGN_UP_Certification_Request,
  SIGN_UP_Forwarding,
  SIGN_UP_Information_Form,
  SIGN_UP_Introduction,
  SIGN_UP_Photo_Registration,
  SIGN_UP_Self_Certification,
  SIGN_UP_Self_Introduction,
} from "constants/signUp";

const Stack = createNativeStackNavigator();

function SignUp() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={`${SIGN_UP_Introduction}`}
        component={SignUpIntroduction}
      />
      <Stack.Screen
        name={`${SIGN_UP_Self_Certification}`}
        component={SelfCertification}
      />
      <Stack.Screen
        name={`${SIGN_UP_Account_Creation_Form}`}
        component={AccountCreationForm}
      />
      <Stack.Screen
        name={`${SIGN_UP_Information_Form}`}
        component={InformationForm}
      />

      <Stack.Screen
        name={`${SIGN_UP_Photo_Registration}`}
        component={PhotoRegistration}
      />
      <Stack.Screen
        name={`${SIGN_UP_Self_Introduction}`}
        component={SelfIntroduction}
      />
      <Stack.Screen name={`${SIGN_UP_Forwarding}`} component={Forwarding} />
      <Stack.Screen
        name={`${SIGN_UP_Badge_Introduction}`}
        component={BadgeIntroduction}
      />
      <Stack.Screen name={`${SIGN_UP_Badge_Select}`} component={BadgeSelect} />
      <Stack.Screen
        name={`${SIGN_UP_Certification_Request}`}
        component={CertificationRequest}
      />
      <Stack.Screen
        name={`${SIGN_UP_Application_Completed}`}
        component={ApplicationCompleted}
      />
    </Stack.Navigator>
  );
}

export default SignUp;
