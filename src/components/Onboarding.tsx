import * as React from "react";
import PersonalInformation from "./PersonalInformation";
import BusinessInformation from "./BusinessInformation";
import PaymentElement from "./PaymentElement";
import { Form, Formik } from "formik";


interface IOnBoardingProps {}

const OnBoarding: React.FunctionComponent<IOnBoardingProps> = (props) => {
  const [currentStep, setCurrentStep] = React.useState<OnboardingStep>(
    OnboardingStep.personal
  );

  return (
    <>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          {/* Personal Info */}
          {currentStep === OnboardingStep.personal && <PersonalInformation />}
          {/* Business Info */}
          {currentStep === OnboardingStep.business && <BusinessInformation />}
          {/* Payment Info */}
          {currentStep === OnboardingStep.personal && <PaymentElement />}
        
        </Form>
      </Formik>
    </>
  );
};

export default OnBoarding;
enum OnboardingStep {
  personal,
  business,
  payment,
}
