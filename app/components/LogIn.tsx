import { Card } from "@mui/material";
import Image from "next/image";

type Props = {
  className?: string;
  userType: string;
  image?: string;
};

export default function LoginCards({ className, userType, image }: Props) {
  return (
    <Card
      elevation={0}
      className={`flex-1 rounded-[12px] p-6  ${className}`}
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(60%)",
        borderRadius: "24px  ",
      }}
    ></Card>
  );
}
