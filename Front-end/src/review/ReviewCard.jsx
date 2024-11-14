// ReviewCard.js
import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red, grey } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import Stack from "@mui/material/Stack";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: "1rem auto",
  borderRadius: "15px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
  backgroundColor: grey[50],
}));

const StyledAvatar = styled(Avatar)({
  backgroundColor: red[500],
});

const ReviewDate = styled(Typography)({
  fontSize: "0.9rem",
  color: grey[500],
});

export default function ReviewCard({ comment, rating, date, reviewId, id, onDelete }) {
  const renderRatingStars = (rating) => (
    <Stack direction="row" spacing={0.5}>
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          key={index}
          style={{
            color: index < rating ? "#FFD700" : grey[400],
          }}
        />
      ))}
    </Stack>
  );

  const formattedDate = new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <StyledCard className="w-96">
      <CardHeader
        avatar={<StyledAvatar aria-label="review">V</StyledAvatar>}
        action={
          <IconButton aria-label="delete" onClick={onDelete}>
            <DeleteIcon className="text-gray-600" />
          </IconButton>
        }
        title="Vishal Pawar"
        subheader={<ReviewDate>{formattedDate}</ReviewDate>}
      />
      <CardContent>
        {renderRatingStars(rating)}
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ marginTop: "0.5rem" }}
        >
          {comment}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}
