import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { ReviewHandler } from '../../Data/ReviewHandler';
import { Reviews } from '../../models/Reviews';

const ReviewForms: React.FC = () => {
  const [searchUsername, setSearchUsername] = useState('');
  const [reviews, setReviews] = useState<Reviews[]>([]);

  const reviewHandler = ReviewHandler.getInstance(); 

  const handleSearch = async () => {
    try {
      const foundReviews = await reviewHandler.getReviewByUsername(searchUsername);
      setReviews(foundReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      // Handle the error, such as displaying an error message to the user
    }
  };
  

  return (
    <div>
      <IonItem>
        <IonLabel position="stacked" style={{ fontSize: 25 }}>Search Username</IonLabel>
        <IonInput
          label=""
          value={searchUsername}
          onIonChange={(e) => setSearchUsername(e.detail.value!)}
        ></IonInput>
      </IonItem>
      <IonButton expand="full" onClick={handleSearch}>
        Search
      </IonButton>
      {reviews.map((review) => (
        <div key={review.reviewId}>
          <h2>{review.username}</h2>
          <p>Stars: {review.stars}</p>
          <p>Shuttle: {review.shuttle}</p>
          <p>Description: {review.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewForms;
