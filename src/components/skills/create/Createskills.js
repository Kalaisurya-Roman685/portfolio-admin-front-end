import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ProjectCreateAction, ProjectSingleData, ProjectUpdateData } from '../../../Redux/actions/projectactions/ProjectActions';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import './styles/Create.scss';
import { ProjectSingleDatas } from '../../../services/projectservices/projectservices';
import { SkillSingleDatas } from '../../../services/skillservices/skill-services';
import { SkillCreateAction, SkillSingleData, SkillUpdateData } from '../../../Redux/actions/skillactions/Skillactions';
function Createskills() {


  const { id } = useParams();
  const history = useNavigate();



  const dispatch = useDispatch();
  const [images, setImages] = useState("");
  const [images1, setImages1] = useState("");


  const [creats, setCreates] = useState({
    title: "",
    des: "",

  })





  useEffect(() => {

    if (id) {
      SkillSingleDatas(id).then((res) => {
        setCreates(res?.data);
        setImages1(res?.data?.image);
      }).catch((err) => {
        console.log(err);
      })
    }



    dispatch(SkillSingleData(id));
  }, [id])

  const { title, des } = creats;

  const handleChange = (e) => {
    setCreates({ ...creats, [e.target.name]: e.target.value });
  }

  const Imagehandlechange = (e) => {
    setImages(e?.target?.files[0])
  }

  const Submits = () => {
    const ids = localStorage.getItem("id");
    const FormDatas = new FormData();
    FormDatas.append("title", title)
    FormDatas.append("image", "images")
    FormDatas.append("des", des)
    FormDatas.append("userId", JSON.parse(ids))
    dispatch(SkillCreateAction(FormDatas, toast, history))

  }


  const editProjects = () => {
    const ids = localStorage.getItem("id");
    const FormDatas = new FormData();
    FormDatas.append("title", title)
    FormDatas.append("image", "images")
    FormDatas.append("des", des)
    FormDatas.append("userId", JSON.parse(ids))
    dispatch(SkillUpdateData(id, FormDatas, toast, history))
  }


  return (
    <div className='createprojectmainsection'>
      <div className='insidesectionproject'>
        <div className='boxproject'>

          <div className='mb-5'>
            <h3>Skills </h3>
          </div>
          {/* <div className='mt-4'>
        <input type="text" placeholder='redirect url path' name="redirectpath" onChange={handleChange} value={redirectpath} />
      </div><br />
      <div>
        <input type="text" placeholder='pathtexts' onChange={handleChange} name="path" value={path} />
      </div><br />
      <div>
        <input type="file" placeholder='redirect url path' style={{ display: "none" }} id="image" onChange={Imagehandlechange} />
        <label htmlFor='image'>
          Image
        </label>

        
      </div> */}


          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Skills Title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter  title' name="title" onChange={handleChange} value={title} />
            <div id="emailHelp" class="form-text">

            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Des</label>
            <input type="text" class="form-control" id="exampleInputPassword1" onChange={handleChange} name="des" value={des} placeholder='Enter des' />
          </div>

          <div>
            <input type="file" placeholder='redirect url path' style={{ display: "none" }} id="image" onChange={Imagehandlechange} />

            {images1 ? <>

              <label htmlFor='image1'>
                <img src={`http://localhost:9500/${images1}`} alt="no image" className='imageshow' />

              </label>

              <input type="file" placeholder='redirect url path' style={{ display: "none" }} id="image1" onChange={Imagehandlechange} />

            </> : <>
              {images ? <>

                <div>
                  {images ? <>
                    <img src={URL.createObjectURL(images)} alt="no image" className='imageshow' id="image" onChange={Imagehandlechange} />
                  </> : <>
                    no image
                  </>}
                </div>
              </> : <>

                <label htmlFor='image'>
                  <img src={"https://s3.amazonaws.com/ionic-marketplace/image-upload/icon.png"} alt="no image" className='imageupload' />
                </label>
              </>}
            </>}

          </div>


          <div className='mt-5'>

            {id ?
              <button className='submits' onClick={editProjects}>
                Update
              </button>
              :
              <button className='submits' onClick={Submits}>
                Create
              </button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Createskills