import { Card, CardContent } from "@mui/material";
type Props = {
  className?: string;
};

export default function ContentCard({ className }: Props) {
  return (
    <Card className={`bg-[#bdc2d0] ${className}`} elevation={0}>
      <CardContent>olamundos</CardContent>
    </Card>
  );
}
