'use client'
import React from 'react'


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = () => {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='z-[99999999]'>
        {['Portfolio', 'Služby', 'Časté dotazy', 'Kontakt'].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={'#'+text}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className='flex justify-center' >
      <div className='h-16  w-[85vw] rounded-full	flex bg-white shadow-lg	' >

        {/* left */}
        <div className='flex w-[65%] '>
        <img className='w-[2rem] ml-6 mr-3' src="https://codegrid.pro/wp-content/themes/codegrid/assets/img/logo/logomark.svg" alt="logo" />

          {/* <img className='w-[5rem] rounded-full' src="data:image/png;base64,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"
            alt="logo" /> */}
          <div className='flex items-center' >
            <h1 className='text-3xl font-black mb-3' >codegrid</h1>
          </div>
        </div>

        {/* right  */}
        <div className='w-[35%]'>
          <div className='md:hidden flex items-center justify-around h-[100%]'>
            {['right'].map((anchor) => (
              <React.Fragment key={anchor}>
                <img onClick={toggleDrawer(anchor, true)} className='w-[40px] cursor-pointer' src="https://i.pinimg.com/474x/09/31/ff/0931ffd1f0a87c38ad555d03691beaae.jpg" alt="icon" />
                {/* <Button className='z-[500]' onClick={toggleDrawer(anchor, true)}>{'icon'}</Button> */}
                <Drawer className='z-[99999]'
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}


                </Drawer>
                
              </React.Fragment>
            ))}
          </div>

          <div className='h-[100%] hidden md:block' >

            <ul className='flex items-center justify-around h-[100%]'>
              <li className='font-medium bg-gray-100 rounded-full pt-1 pb-1 pl-4 pr-4  hover:bg-slate-900 hover:text-white'> <a href='#Portfolio' >Portfolio</a> </li>
              <li className='font-medium bg-gray-100 rounded-full pt-1 pb-1 pl-4 pr-4  hover:bg-slate-900 hover:text-white'> <a href='#Služby'>Služby</a> </li>
              <li className='font-medium bg-gray-100 rounded-full pt-1 pb-1 pl-4 pr-4  hover:bg-slate-900 hover:text-white'> <a href='#Časté dotazy'>Časté dotazy</a> </li>
              <li className='font-medium bg-gray-100 rounded-full pt-1 pb-1 pl-4 pr-4  hover:bg-slate-900 hover:text-white'> <a href='#Kontakt'>Kontakt</a> </li>
            </ul>
          </div>
        </div>

      </div>


      {/* <div>
        {[ 'right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div> */}



    </div>
  )
}

export default Navbar
