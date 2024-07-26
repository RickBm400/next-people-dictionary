import { Card, CardContent } from "@mui/material";
interface props {
  classItems: string;
}

export default function ContentCard({ classItems }: props) {
  return (
    <Card className={`bg-[#bdc2d0] ${classItems}`}>
      <CardContent>olamundos</CardContent>
    </Card>
  );
}
