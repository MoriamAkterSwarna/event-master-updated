import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const EventCard = ({ filteredEvent }) => {
  const {
    event_id,
    event_name,
    event_image,
    description,
    event_date,
    event_time,
    allowed_guests,
  } = filteredEvent;
  return (
    <Card sx={{ maxWidth: 345 }} style={{ height: "460px", width: "345px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="events">
            E
          </Avatar>
        }
        title={event_name}
        subheader={event_date}
        titleTypographyProps={{ style: { fontSize: "20px" }, fontWeight: 600 }}
      />
      <CardMedia
        component="img"
        style={{ height: 194 }} // Set the fixed height in pixels
        image={event_image}
        alt={event_name}
      />
      <CardContent>
        <Typography className="mb-3" variant="body1" color="text.secondary">
          {description}
        </Typography>
        <hr className="h-2" />
        <div className="mt-2 flex justify-between items-center">
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              backgroundColor: "#007bff", // Set your desired background color
              color: "white", // Set the text color
              borderRadius: "8px", // Add rounded corners
              padding: "4px 8px", // Add padding for spacing
            }}>
            {event_time}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              backgroundColor: "#E57604", // Set your desired background color
              color: "white", // Set the text color
              borderRadius: "8px", // Add rounded corners
              padding: "4px 8px", // Add padding for spacing
            }}>
            {allowed_guests} seats
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
