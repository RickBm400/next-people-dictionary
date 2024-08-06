import { Card } from "@mui/material";

type Props = {
  className?: string;
  user: string;
};

export default function LoginCards(props: Props) {
  return (
    <Card
      elevation={0}
      className={`flex-1 rounded-[12px] p-6 bg-[#bdc2d0] ${props.className}`}
    >
      {props.user}
    </Card>
  );
}
