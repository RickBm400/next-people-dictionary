import { Card, CardContent } from "@mui/material";
type Props = {
  classItems?: string;
};

export default function ContentCard({ classItems }: Props) {
  return (
    <Card className={`bg-[#bdc2d0] ${classItems}`} elevation={0}>
      <CardContent>olamundos</CardContent>
    </Card>
  );
}
