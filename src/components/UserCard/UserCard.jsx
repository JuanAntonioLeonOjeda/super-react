import PropTypes from 'prop-types'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom';

export default function UserCard({ data }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/users/${data.id}`)
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          { data.name }
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          { data.username }
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small" onClick={ handleClick }>View Profile</Button>
      </CardActions>
    </Card>
  );
}

UserCard.propTypes = {
  data: PropTypes.object
}
