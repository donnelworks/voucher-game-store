import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";

const SignUpPhotoForm = ({ photo }) => {
  return (
    <form action="">
      <div className="form-input d-md-block d-flex flex-column">
        <div>
          <div className="mb-20">
            <div className="image-upload text-center">
              <label for="avatar">
                {photo ? (
                  <Image
                    src="/img/avatar-1.png"
                    width={120}
                    height={120}
                    className="rounded-circle"
                    alt=""
                  />
                ) : (
                  <Image src="/icon/upload.svg" width={120} height={120} />
                )}
              </label>
              <input
                id="avatar"
                type="file"
                name="avatar"
                accept="image/png, image/jpeg"
              />
            </div>
          </div>
          <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
            Shayna Anne
          </h2>
          <p className="text-lg text-center color-palette-1 m-0">
            shayna@anne.com
          </p>
          <div className="pt-50 pb-50">
            <label
              for="category"
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              Favorite Game
            </label>
            <select
              id="category"
              name="category"
              className="form-select d-block w-100 rounded-pill text-lg"
              aria-label="Favorite Game"
            >
              <option value="" disabled selected>
                Select Category
              </option>
              <option value="fps">First Person Shoter</option>
              <option value="rpg">Role Playing Game</option>
              <option value="arcade">Arcade</option>
              <option value="sport">Sport</option>
            </select>
          </div>
        </div>

        <div className="button-group d-flex flex-column mx-auto">
          <a
            className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
            href="/sign-up-success"
            role="button"
          >
            Create My Account
          </a>
          <a
            className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
            href="#"
            role="button"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </form>
  );
};

SignUpPhotoForm.propTypes = {
  photo: PropTypes.string,
};

export default SignUpPhotoForm;
