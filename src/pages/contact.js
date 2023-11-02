import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <form action="" method="POST">
          <div className="form-row">
            <div className="input-data">
              <input type="text" required></input>
              <div className="underline"></div>
              <label for="">First Name</label>
            </div>
            <div className="input-data">
              <input type="text" required></input>
              <div className="underline"></div>
              <label for="">Last Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input type="text" required></input>
              <div className="underline"></div>
              <label for="">Email Address</label>
            </div>
            <div className="input-data">
              <input type="text" required></input>
              <div className="underline"></div>
              <label for="">News Category</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea rows="8" cols="80" required></textarea>
              <br />
              <div className="underline"></div>
              <label for="">Write your message</label>
              <br />
              <div className="form-row submit-btn">
                <div className="input-data">
                  <div className="inner"></div>
                  <input type="submit" value="submit"></input>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
