import styles from '../styles/components/SideBar.module.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";

export function SideBar () {

    return (
        <>
      <div className={styles.container}>
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar >
          <SidebarHeader className={styles.header}>
          
            <img src="icons/moveit.svg" alt="Level"/>
            
          </SidebarHeader>
          <SidebarContent>
            <Menu>
              
              <MenuItem className={styles.home}>
                <img src="icons/home.svg" alt="Home"/>
              </MenuItem>
              <MenuItem className={styles.ranks}>
                <img src="icons/ranks.svg" alt="Ranks"/>
              </MenuItem>
        
            </Menu>
          </SidebarContent>
          <SidebarFooter>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
    );
}