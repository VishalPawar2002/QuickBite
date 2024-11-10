import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ReviewCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="review">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            
            <DeleteIcon />
          </IconButton>
        }
        title="Vishal Pawar"
        subheader={'Review Date'}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is a fantastic product! I really enjoyed using it. It has great features and the quality is top-notch. Highly recommend!
        </Typography>
      </CardContent>
    </Card>
  );
}
