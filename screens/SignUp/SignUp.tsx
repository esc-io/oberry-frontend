import React from "react";

import { RouteProp, useRoute } from "@react-navigation/native";

import { ListSelect, OneSelect } from "widgets/common";

import {
  Introduction,
  SelfCertification,
  AccountCreationForm,
} from "widgets/signUp/AccountCreation";
import { InformationForm } from "widgets/signUp/BasicInformation";
import { PhotoRegistration } from "widgets/signUp/ProfilePicture";
import { Forwarding, SelfIntroduction } from "widgets/signUp/Introduction";
import {
  BadgeIntroduction,
  BadgeSelect,
  CertificationDataSubmit,
  CertificationRequest,
} from "widgets/signUp/Badge";

import {
  SIGN_UP_INTRODUCTION,
  SIGN_UP_SELF_CERTIFICATION,
  SIGN_UP_ACCOUNT_CREATION_FROM,
  SIGN_UP_INFORMATION_FORM,
  SIGN_UP_PROFILE_PICTURE,
  SIGN_UP_SELF_INTRODUCTION,
  SIGN_UP_FORWARDING,
  SIGN_UP_BADGE_INTRODUCTION,
  SIGN_UP_BADGE_SELECT,
  SIGN_UP_APPLICATION_COMPLETED,
} from "constants/signUp";
import ApplicationCompleted from "widgets/signUp/ApplicationCompleted/ApplicationCompleted";

type ParamList = {
  sampleType: {
    step: number;
  };
};

function SignUp() {
  const {
    params: { step },
  } = useRoute<RouteProp<ParamList, "sampleType">>();

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
      {step === SIGN_UP_SELF_INTRODUCTION && <SelfIntroduction />}
      {step === SIGN_UP_FORWARDING && <Forwarding />}
      {step === SIGN_UP_BADGE_INTRODUCTION && <BadgeIntroduction />}
      {step === SIGN_UP_BADGE_SELECT && (
        <>
          {/* <BadgeSelect /> */}
          {/* <CertificationDataSubmit /> */}
          <CertificationRequest />
        </>
      )}
      {step === SIGN_UP_APPLICATION_COMPLETED && <ApplicationCompleted />}
    </>
  );
}

export default SignUp;
