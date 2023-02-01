import React from 'react'
import FlipCard from './FlipCard'
import Occasion from './Occasion'
import Stack from '@mui/material/Stack';

function Tabs() {
    const url = '/placeholder.jfif'
  return (
    <div>
        <ul className="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" id="pill-li" role="presentation">
          <button className="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Search by Dress Code</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Search by Occasion</button>
        </li>
      </ul>
    <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                <div className='d-flex flex-row flex-wrap'>
                    <FlipCard title={"Business Casuals"} subtitle={"Information about business casuals"} image={'/placeholder.jfif'}/>
                    <FlipCard title={"Smart Casuals"} subtitle={"Information about Smart casuals"}  image={'/placeholder.jfif'}/>
                    <FlipCard title={"Casuals"} subtitle={"Information about casuals"}  image={'/placeholder.jfif'}/>
                </div>
            </div>
    </div>
    <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
            <div className='text-center'>
                <Occasion />
                <Stack direction="row" spacing={2} sx={{marginTop: '20px'}}>
                    <FlipCard title={"Outfit Template #1"} subtitle={""} image={url}/>
                    <FlipCard title={"Outfit Template #2"} subtitle={""} image={url}/>
                </Stack>
                <Stack direction="row" spacing={2} sx={{marginTop: '20px'}}>
                    <FlipCard title={"Outfit Template #3"} subtitle={""} image={url}/>
                    <FlipCard title={"Outfit Template #4"} subtitle={""} image={url}/>
                </Stack>
            </div>
        </div>
    </div>      
    </div>
  )
  }

export default Tabs