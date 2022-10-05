import Image from "next/image";
import { Input } from "../atoms";

const EditProfileForm = () => {
  return (
    <form action="">
      <div className="photo d-flex">
        <div className="position-relative me-20">
          <img
            src="/img/avatar-1.png"
            width="90"
            height="90"
            className="avatar img-fluid"
          />
          <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
            <Image src="/icon/trash.svg" width={24} height={24} />
          </div>
        </div>
        <div className="image-upload">
          <label for="avatar">
            <Image src="/icon/upload.svg" width={90} height={90} />
          </label>
          <input
            id="avatar"
            type="file"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </div>
      </div>
      <div className="pt-30">
        <Input
          label="Full Name"
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="pt-30">
        <Input
          label="Email Address"
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email address"
        />
      </div>
      <div className="pt-30">
        <Input
          label="Phone"
          id="phone"
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
        />
      </div>
      <div className="button-group d-flex flex-column pt-50">
        <button
          type="submit"
          className="btn btn-save fw-medium text-lg text-white rounded-pill"
          role="button"
        >
          Save My Profile
        </button>
      </div>
    </form>
  );
};

export default EditProfileForm;
