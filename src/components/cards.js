import React from "react";

export default function cardsComponent(props) {
  const cardStyle = {
    cardHeader: {
      color: props.theme === "light" ? "#000" : "#fff",
      backgroundColor: props.theme === "light" ? "#fff" : "#6D5D6E"
    },
    cardBody: {
      color: props.theme === "light" ? "#000" : "#000",
      backgroundColor: props.theme === "light" ? "#fff" : "#F4EEE0"
    }
  };

  const button1Theme =
    props.theme === "light"
      ? "w-100 btn btn-lg btn-outline-primary"
      : "w-100 btn btn-lg btn-outline-dark";
  const buttonsTheme =
    props.theme === "light"
      ? "w-100 btn btn-lg btn-primary"
      : "w-100 btn btn-lg btn-dark";

  return (
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center mt-4 pt-4">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3" style={cardStyle.cardHeader}>
            <h4 className="my-0 fw-normal">Free</h4>
          </div>
          <div className="card-body" style={cardStyle.cardBody}>
            <h1 className="card-title pricing-card-title">
              $0<small className="text-muted fw-light">/mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className={button1Theme}>
              Sign up for free
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3" style={cardStyle.cardHeader}>
            <h4 className="my-0 fw-normal">Pro</h4>
          </div>
          <div className="card-body" style={cardStyle.cardBody}>
            <h1 className="card-title pricing-card-title">
              $15<small className="text-muted fw-light">/mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className={buttonsTheme}>
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3" style={cardStyle.cardHeader}>
            <h4 className="my-0 fw-normal">Enterprise</h4>
          </div>
          <div className="card-body" style={cardStyle.cardBody}>
            <h1 className="card-title pricing-card-title">
              $29<small className="text-muted fw-light">/mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className={buttonsTheme}>
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
