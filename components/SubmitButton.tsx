"use-client";
import { Button } from "./ui/button";
import Image from "next/image";
interface ButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
}
const SubmitButton = ({ children, className, isLoading }: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
      // onClick={() => console.log("click")}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image src="/assets/icons/loader.svg" alt="loader" height={24} width={24} className="animate-spin" />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
