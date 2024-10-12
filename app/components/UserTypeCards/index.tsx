import { Card, Button, styled } from "@mui/material";
import Image from "next/image";
import "./style.sass";

type Props = {
  className?: string;
  userType: string;
  image?: string;
};

const ActionButton = styled(Button)({
  boxShadow: "none",
  border: "1px solid white",
  color: "white",
  borderRadius: "14px",
  paddingInline: "36px",
});

export default function UserTypeCards({ userType, className, image }: Props) {
  return (
    <Card
      elevation={0}
      className={`flex-1 flex card relative rounded-[12px] p-6  ${className}`}
    >
      <Image
        src={`${image}`}
        alt={`${userType}`}
        objectFit="cover"
        layout="fill"
        quality={100}
        className="card-image"
      />
      {/* <div className="relative"></div> */}
      <div className="card__bottom-text flex  justify-between mt-auto z-10 w-[100%]">
        <p className="basis-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          voluptatum.
        </p>
        <ActionButton>Login</ActionButton>
      </div>
    </Card>
  );
}
