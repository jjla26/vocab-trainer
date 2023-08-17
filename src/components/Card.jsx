import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';

export default function ActionAreaCard(props) {
  const { word, translation, image, children } = props
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
      />
      <CardContent>
        {word && <Typography gutterBottom variant="h5" component="div">
          {word}
        </Typography>}
        {translation &&<Typography gutterBottom variant="h5" component="div">
          {translation}
        </Typography>}
      </CardContent>
      <CardActions>
        {children}
      </CardActions>
    </Card>
  );
}