import React, { useEffect, useState } from 'react'
import './styles/Profile.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ProfileActionData, ProfileGetData } from '../../Redux/actions/profileactions/ProfileActions';
function Profile() {

  const urls = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU';

  const history = useNavigate();

  const dispatch = useDispatch();

  const state = useSelector((state) => state?.users?.user?.user);

  console.log(state, "state");

  const [images, setImages] = useState("");


  useEffect(() => {
    dispatch(ProfileGetData());
  }, [])


  const handleChangeimage = (e) => {
    setImages(e?.target?.files[0]);
  }

  const ProfileImageUpload = () => {
    const userid = localStorage.getItem("id");
    const formDatas = new FormData();
    formDatas.append("image", images);
    dispatch(ProfileActionData(JSON.parse(userid), formDatas, toast, history));
  }

  return (
    <div className='mainprofilesection'>
      <div className='insideprofile'>
        <div className='cardsectionprofile'>
          <div className='imageprofiel'>
            <input type="file" onChange={handleChangeimage} accept='image/png, image/jpeg,image/jpg' style={{ display: "none" }} id="image" />
            <label htmlFor='image'>
              {images ? <>
                <img src={URL.createObjectURL(images)} alt="no image" className='imageround' />
              </> : <>
                <img src={`http://localhost:9500/${state?.image}`} alt="no image" className='imageround' />

              </>}
            </label>
            <div className='mt-4'>

              <button onClick={ProfileImageUpload} className='upload'>Upload</button>



            </div>
          </div>
          <div>

            <div className='formsection'>
              <div class="mb-3 col-lg-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state?.username}/>
                <div id="emailHelp" class="form-text">
                  {/* We'll never share your email with anyone else. */}
                </div>
              </div>
              <div class="mb-3 col-lg-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="mb-3 col-lg-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
            </div>
            <div className='formsection'>
              <div class="mb-3 col-lg-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">
                  {/* We'll never share your email with anyone else. */}
                </div>
              </div>
              <div class="mb-3 col-lg-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="mb-3 col-lg-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
            </div>
            <div className='formsection'>
              <div class="mb-3 col-lg-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">
                  {/* We'll never share your email with anyone else. */}
                </div>
              </div>

            </div>


           <div className='d-flex justify-content-center mt-3 mb-3'>
           <button class="submits">Submit</button>
           </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile