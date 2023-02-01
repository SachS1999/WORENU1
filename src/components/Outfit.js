import {React, useState} from 'react'
import ShoppingCard from './ShoppingCard'
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { borderRadius } from '@mui/system';
import DrawerItem from './DrawerItem';

function Outfit(props) {
    const url = 'https://bonobos-prod-s3.imgix.net/products/267456/original/BLAZER_CASUAL-BLAZER_BBZ01472SK2372_40_outfitter.jpg?1668239620=&auto=format&fit=clip&cs=srgb&w=768&q=75'
    const [open, setOpen] = useState(false)

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };
     

  return (
    <div className='d-flex'>
        <div className='row justify-content-start my-3 row-cols-2 w-50 d-flex flex-row flex-wrap'>
            <ShoppingCard title={"Bonobos Casual Vest"} subtitle={"$450.00"} image={url} handleDrawerOpen={handleDrawerOpen}/>
            <ShoppingCard title={"Bonobos Casual Vest"} subtitle={"$450.00"} image={url} handleDrawerOpen={handleDrawerOpen}/>
            <ShoppingCard title={"Bonobos Casual Vest"} subtitle={"$450.00"} image={url} handleDrawerOpen={handleDrawerOpen}/>
            <ShoppingCard title={"Bonobos Casual Vest"} subtitle={"$450.00"} image={url} handleDrawerOpen={handleDrawerOpen}/>
        </div>
        <div className='row-cols-2 mt-4 mx-5 w-25'>
            <h2 className=''>Style Meter</h2>

            <span>Practical<Slider defaultValue={0} aria-label="Default"  valueLabelDisplay="auto" /></span>
            <span>Relaxed<Slider defaultValue={0} aria-label="Default" color="secondary" valueLabelDisplay="auto" /></span>
            <span>Outgoing<Slider defaultValue={0} aria-label="Default" color="success" valueLabelDisplay="auto" /></span>
            <span>Creative<Slider defaultValue={0} aria-label="Default" style={{color: "pink"}} valueLabelDisplay="auto" /></span>
            <span>All Black<Slider defaultValue={0} aria-label="Default" style={{color: "black"}} valueLabelDisplay="auto" /></span>
            <div>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" style={{backgroundColor: "#21252e", padding: "16px", fontSize: '10px', margin: '2px 2px', borderRadius: "50%"}} />
                <Button variant="contained" style={{backgroundColor: "#5c697a", padding: "16px", fontSize: '10px', margin: '2px 2px', borderRadius: "50%"}} />
                <Button variant="contained" style={{backgroundColor: "#8eafcb", padding: "16px", fontSize: '10px', margin: '2px 2px', borderRadius: "50%"}} />
                <Button variant="contained" style={{backgroundColor: "#bcb1a4", padding: "16px", fontSize: '10px', margin: '2px 2px', borderRadius: "50%"}} />
                <Button variant="contained" style={{backgroundColor: "#53645c", padding: "16px", fontSize: '10px', margin: '2px 2px', borderRadius: "50%"}} />
            </Stack>
            </div>
        </div>
        <div>
            <DrawerItem open={open} setOpen={setOpen} url={url}/>
        </div>
    </div>
  )
}

export default Outfit