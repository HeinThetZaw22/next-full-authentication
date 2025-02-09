import CardWrapper from "@/components/auth/card-wrapper";
import { BsExclamationCircleFill } from "react-icons/bs";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className=" w-full flex items-center justify-center">
        <BsExclamationCircleFill className=" text-destructive" />
      </div>
    </CardWrapper>
  );
};
