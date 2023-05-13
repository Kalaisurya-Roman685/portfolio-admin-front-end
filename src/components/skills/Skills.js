import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ProjectGetAllData, ProjectDeletes } from '../../Redux/actions/projectactions/ProjectActions';
import './styles/Project.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Skills() {
  const [Projectjs, setProjects] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.skill?.skills?.data)
  console.log(state, "state");
  useEffect(() => {
    dispatch(ProjectGetAllData());
  }, [])

  const history = useNavigate();

  const DeleteProject = (id) => {
    console.log(id, "id")
    dispatch(ProjectDeletes(id, toast, history));
  }

  const EditProject = (id) => {
    history(`/portfolio/project/create/${id}`)


  }
  return (
    <div className='mainprojects'>
      <div className='insideprojectjs'>
        <div className='buttonsections mb-3'>
          <button className='createprjects' onClick={() => history('/portfolio/skills/create')}>+ Create Skills</button>

        </div>
        <div className='row  projectbox'>
          {state?.map((item, index) => {
            return (
              <div className='cardprojects'>

                <div>
                  {item?.image ? <>
                    <img src={`http://localhost:9500/${item?.image}`} alt="no image" className='imageround' />
                  </> : <>

                    No Image

                  </>}
                </div>

                <div className='projectcontent'>
                  <div>
                    {item?.pathtexts}
                  </div>
                  <div className='mt-3'>
                    {item?.redirecturl}
                  </div>

                  <div>
                    <div onClick={() => EditProject(item?._id)}>
                      <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div onClick={() => DeleteProject(item?._id)}>
                      <i class="fa-solid fa-trash"></i>
                    </div>

                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>


    </div>
  )
}

export default Skills;