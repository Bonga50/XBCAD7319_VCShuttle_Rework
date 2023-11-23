import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { ReviewHandler } from '../../Data/ReviewHandler';
import { Reviews } from '../../models/Reviews';

const ReviewForms: React.FC = () => {
  const [searchUsername, setSearchUsername] = useState('');
  const [review, setReview] = useState<Reviews | null>(null);

  const reviewHandler = ReviewHandler.getInstance(); 

  const handleSearch = () => {
    const foundReview = reviewHandler.getReviewByUsername(searchUsername);
    setReview(foundReview || null);
  };
  

  return (
    <div>
      <IonItem>
        <IonLabel position="stacked">Search Username</IonLabel>
        <IonInput
          label=""
          value={searchUsername}
          onIonChange={(e) => setSearchUsername(e.detail.value!)}
        ></IonInput>
      </IonItem>
      <IonButton expand="full" onClick={handleSearch}>
        Search
      </IonButton>
      {review && (
        <div key={review.reviewId}>
          <h2>{review.username}</h2>
          <p>Stars: {review.stars}</p>
          <p>Shuttle: {review.shuttle}</p>
          <p>Description: {review.description}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewForms;
