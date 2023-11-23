import {
    IonButton,
    IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useRef, useState } from "react";
import "./StudentReviews.css";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import ShuttleDropDown from "../ShuttleDropDown/ShuttleDropDownForm";

const StudentReviews: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState<string|null>();

  const handleStarClick = (starValue: number) => {
    setRating(starValue);
    console.log(`User selected ${starValue} stars`);
  };

  function confirm() {
    modal.current?.dismiss(input.current?.value, "confirm");
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === "confirm") {
    }
  }

  const handleEdit = () => {
    // Handle edit action here
  };

  const handleDelete = () => {
    // Handle delete action here
  };

  const handleClose = () => {
    // Handle close action here
  };

  return (
    <div>
      <IonModal
        ref={modal}
        trigger="open-ReviewsModal"
        onWillDismiss={(ev) => onWillDismiss(ev)}
      >
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>
                Cancel
              </IonButton>
            </IonButtons>
            <IonTitle>Reviews</IonTitle>
            <IonButtons slot="end">
              <IonButton strong={true} onClick={() => confirm()}>
                Confirm
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <div className="stars">
          {[5, 4, 3, 2, 1].map((starValue) => (
            <>
              <input
                className={`star star-${starValue}`}
                id={`star-${starValue}`}
                type="radio"
                name="star"
                onClick={() => handleStarClick(starValue)}
              />
              <label
                className={`star star-${starValue}`}
                htmlFor={`star-${starValue}`}
              />
            </>
          ))}
        </div>

<div className="ion-padding">
        <ShuttleDropDown
          onShuttleSelect={function (shuttleID: number): void {
            throw new Error("Function not implemented.");
          }}
        />

        <IonItem>
          <IonLabel position="stacked">Description</IonLabel>
          <IonInput
            label=""
            value={description}
            onIonChange={(e) => setDescription(e.detail.value!)}
          ></IonInput>
        </IonItem>
        </div>
      </IonModal>
    </div>
  );
};

export default StudentReviews;
